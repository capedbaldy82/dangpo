'use client';

import SpinnerSmall from '@/components/common/Spinner_small';
import { useChangeStatus } from '@/hooks/useChangeStatus';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  id: string;
  image: string;
  title: string;
  content: string;
  status: string;
};

const ApplicationInfoCard = ({ id, image, title, content, status }: Props) => {
  const [statusValue, setStatusValue] = useState(status);
  const { loading, changeStatus } = useChangeStatus();

  const saveStatus = () => {
    if (loading) return;

    changeStatus(statusValue, id);
  };

  return (
    <li className="p-4 border border-black rounded-md overflow-hidden">
      <div className="w-full h-80 overflow-hidden relative object-cover mb-4">
        <Image
          src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${image}/adminproduct`}
          alt="사진"
          fill
          priority={true}
        />
      </div>
      <div className="space-y-2">
        <div className="flex">
          <p className="text-lg font-bold w-1/3 sm:w-1/5">상품명</p>
          <p>{title}</p>
        </div>
        <div className="flex">
          <p className="text-lg font-bold w-1/3 sm:w-1/5">상세 설명</p>
          <p>{content}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex w-1/2">
            <p className="text-lg font-bold w-[66.666666%] sm:w-2/5">상품 상태</p>
            <select
              name="status"
              id="status"
              className="border border-black rounded-md focus:outline-black"
              value={statusValue}
              onChange={(e) => setStatusValue(e.target.value)}>
              <option value="standby">대기</option>
              <option value="ongoing">진행</option>
              <option value="done">완료</option>
            </select>
          </div>
          <div className="">
            <button
              onClick={saveStatus}
              className="w-16 px-4 rounded-sm h-full bg-black text-white">
              {loading ? <SpinnerSmall /> : '저장'}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ApplicationInfoCard;
