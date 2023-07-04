'use client';

import { useState } from 'react';
import { useApply } from '@/hooks/useApply';
import { ItemType } from '@/types';
import ApplyFormCard from '@/app/apply/applyFormCard';
import Spinner from '@/components/common/Spinner';
import useUser from '@/hooks/useUser';
import { Timestamp } from 'firebase/firestore';
import LoadingAndValidationCheck from '@/components/common/LoadingAndValidationCheck';

type UserDoc = {
  address: string;
  application: string[];
  createdTime: Timestamp;
  docId: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  uid: string;
};

const ApplyFormList = () => {
  const { user, loading: userLoading } = useUser();
  const [errorMessage, setErrorMessage] = useState('');
  const [items, setItems] = useState<ItemType[]>([
    {
      id: 1,
      title: '',
      content: '',
      image: null,
    },
  ]);
  const { apply, loading: applyLoading } = useApply();

  // onChange for ApplyFormCard
  const onChangeById = (id: number, title: string, content: string, image: any) => {
    setItems((prev: ItemType[]) => {
      const temp = prev.map((item: ItemType) => {
        if (item.id === id) {
          return { ...item, title, content, image };
        } else {
          return item;
        }
      });
      return temp;
    });
  };

  // ApplyFormCard 추가
  const addApplyFormCard = () => {
    setItems((prev: ItemType[]) => {
      const temp = [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          title: '',
          content: '',
          image: null,
        },
      ];

      return temp;
    });
  };

  // ApplyFormCard 제거
  const removeApplyFormCard = (id: number) => {
    if (items.length <= 1) return;
    setItems((prev: ItemType[]) => {
      const temp = prev.filter((item) => item.id !== id);

      return temp;
    });
  };

  // 유효성 검사
  const onValid = (items: ItemType[]) => {
    const result = items.every((item) => item.title && item.image);

    if (!result) {
      setErrorMessage('상품 사진과 상품명은 필수입니다');
    } else {
      setErrorMessage('');
    }

    return result;
  };

  // 신청하기
  const ApplyAllCards = () => {
    if (!onValid(items)) return;
    if (applyLoading) return;

    if (user.uid && user.email) {
      apply(items, user.uid, user.email);
    } else {
      alert('로그인 상태에 문제가 발생했습니다.\n재로그인 해주시기바랍니다.');
    }
  };

  return (
    <LoadingAndValidationCheck loading={userLoading} validation={user.isAuthReady}>
      <section className="flex flex-col space-y-4">
        {items.map((item) => (
          <ApplyFormCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            content={item.content}
            onChangeById={onChangeById}
            removeApplyFormCard={removeApplyFormCard}
          />
        ))}
        <button
          onClick={addApplyFormCard}
          className="flex justify-center border-2 border-gray-500 bg-slate-200 px-4 py-8 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          onClick={() => ApplyAllCards()}
          className="bg-black text-white p-4 rounded-md text-lg">
          {applyLoading ? <Spinner /> : '신청하기'}
        </button>
        <p className="text-center text-red-500">{errorMessage}</p>
      </section>
    </LoadingAndValidationCheck>
  );
};

export default ApplyFormList;
