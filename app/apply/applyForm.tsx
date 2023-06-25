'use client';
import { useState, useEffect } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { useAddDoc } from '@/hooks/useAddDoc';
import useUser from '@/hooks/useUser';
import Spinner from '@/components/common/Spinner';

type ItemForm = {
  id: number;
  title: string;
  image: string;
  content: string;
};

const ApplyForm = () => {
  // useForm을 통한 신청 관리
  const { register, handleSubmit, watch } = useForm<ItemForm>();

  // 이미지 미리보기를 위한 상태 및 image value
  const image = watch('image');
  const [itemPreview, setItemPreview] = useState('');

  // 신청하기 - uid 확인 및 addDoc 메서드
  const { user } = useUser();
  const { addDocument, loading } = useAddDoc('application', '/apply/done');

  // 신청하기 - 유효성 검사 통과 시
  const onValid = (value: ItemForm) => {
    if (loading) return;
    if (!user.uid) return;

    addDocument({ uid: user.uid, title: value.title, content: value.content });
  };

  // 신청하기 - 유효성 검사 실패 시
  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };

  // 이미지 미리보기 설정
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];

      // @ts-ignore
      const blob = new Blob(file);

      setItemPreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <section className="flex flex-col space-y-4">
      <form onSubmit={handleSubmit(onValid, onInvalid)} className="flex flex-col space-y-4">
        <div
          className="w-full h-80  bg-slate-300 rounded-md flex bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${itemPreview})` }}>
          <label
            htmlFor="photo"
            className="w-full h-full border rounded-md flex justify-center items-center cursor-pointer">
            {itemPreview ? null : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-slate-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}
            <input
              {...register('image', { required: true })}
              id="photo"
              type="file"
              accept="image/*"
              className="w-1 h-1 hidden"
            />
          </label>
        </div>
        <input
          {...register('title', {
            required: '상품명을 입력해주세요',
            minLength: { message: '최소 2글자 이상 입력해주세요', value: 2 },
          })}
          type="text"
          placeholder="상품명"
          className="p-2 border border-gray-500 rounded-md"
        />
        <textarea
          className="p-2 border border-gray-500 rounded-md h-40 resize-none"
          {...register('content')}
        />
        <button className="p-4 bg-black text-white rounded-md text-lg">
          {loading ? <Spinner /> : '신청 하기'}
        </button>
      </form>
      <p className="text-center text-red-500">error</p>
    </section>
  );
};

export default ApplyForm;
