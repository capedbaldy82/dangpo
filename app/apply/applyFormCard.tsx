import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  id: number;
  title: string;
  content: string;
  image: any;
  onChangeById: (id: number, title: string, content: string, image: any) => void;
  removeApplyFormCard: (id: number) => void;
  // register: UseFormRegisterReturn;
};

const ApplyFormCard = ({ id, title, content, image, onChangeById, removeApplyFormCard }: Props) => {
  //   const {register, watch} = useForm();
  const [itemPreview, setItemPreview] = useState('');
  const [imageState, setImageState] = useState<any>();

  useEffect(() => {
    if (imageState && imageState.length > 0) {
      const file = imageState[0];

      setItemPreview(URL.createObjectURL(file));
    }
  }, [imageState]);

  const getFileUploadUrl = async () => {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.NEXT_PUBLIC_CF_ID}/images/v2/direct_upload`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CF_TOKEN}`,
        },
      }
    );

    const result = await response.json();

    console.log(result);
  };

  useEffect(() => {
    console.log(imageState);
  }, [imageState]);

  return (
    <div className="border border-black flex flex-col space-y-4  p-4 rounded-md relative">
      <div
        onClick={() => removeApplyFormCard(id)}
        className="absolute border border-red-500 top-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div
        className="w-full h-80  bg-slate-300 rounded-md flex bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${itemPreview})` }}>
        <label className="w-full h-full border rounded-md flex justify-center items-center cursor-pointer">
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
          <input type="file" accept="image/*" onChange={(e) => setImageState(e.target.files)} />
        </label>
      </div>
      <input
        type="text"
        placeholder="상품명"
        value={title}
        className="border border-gray-500 rounded-md p-4"
        onChange={(e) => onChangeById(id, e.target.value, content, image)}
      />
      <input
        type="text"
        placeholder="설명"
        value={content}
        className="border border-gray-500 rounded-md p-4"
        onChange={(e) => onChangeById(id, title, e.target.value, image)}
      />
      <button onClick={getFileUploadUrl}>업로드 URL 받기</button>
      <button>업로드</button>
    </div>
  );
};

export default ApplyFormCard;
