'use client';

import ApplyFormCard from '@/app/apply/applyFormCard';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type ApplyFormListType = {};

type ItemType = {
  id: number;
  title: string;
  content: string;
  image: any;
};

const ApplyFormList = () => {
  const { register, handleSubmit } = useForm();
  const [items, setItems] = useState<ItemType[]>([
    {
      id: 1,
      title: '',
      content: '',
      image: '',
    },
  ]);

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

  const addApplyFormCard = () => {
    setItems((prev: ItemType[]) => {
      const temp = [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          title: '',
          content: '',
          image: '',
        },
      ];

      return temp;
    });
  };

  const removeApplyFormCard = (id: number) => {
    if (items.length <= 1) return;
    setItems((prev: ItemType[]) => {
      const temp = prev.filter((item) => item.id !== id);

      return temp;
    });
  };

  return (
    <div>
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
      <div>
        <button onClick={addApplyFormCard} className="border border-black p-4 rounded-md">
          추가
        </button>
        <button onClick={() => console.log(items)} className="border border-black p-4 rounded-md">
          신청
        </button>
      </div>
    </div>
  );
};

export default ApplyFormList;
