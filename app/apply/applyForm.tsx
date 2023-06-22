'use client';
import { useState, useEffect } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';

type ItemForm = {
  id: number;
  title: string;
  image: string;
  content: string;
};

const ApplyForm = () => {
  const { register, handleSubmit, watch } = useForm<ItemForm>();
  const [itemPreview, setItemPreview] = useState('');
  const image = watch('image');

  const onValid = (value: ItemForm) => {
    console.log(value);
  };

  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];

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
        <button className="p-4 bg-black text-white rounded-md text-lg">신청 하기</button>
      </form>
      <p className="text-center text-red-500">error</p>
    </section>
  );
};

export default ApplyForm;
