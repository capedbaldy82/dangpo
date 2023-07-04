'use client';

import { useState } from 'react';
import { useNotice } from '@/hooks/useNotice';
import useUser from '@/hooks/useUser';
import useAdmin from '@/hooks/useAdmin';
import dynamic from 'next/dynamic';
import Heading from '@/components/common/Heading';
import 'react-quill/dist/quill.snow.css';
import LoadingAndValidationCheck from '@/components/common/LoadingAndValidationCheck';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <div className="h-[428px] border border-gray-300" />,
});

const NoticeNew = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { post, loading } = useNotice();
  const { user } = useUser();
  const { admin, loading: adminLoading } = useAdmin();

  const checkValidaction = (data: string) => {
    return data.length > 0;
  };

  const onClickPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkValidaction(title)) {
      setErrorMessage('제목을 입력해주세요');
      return;
    }
    if (!checkValidaction(content)) {
      setErrorMessage('내용을 입력해주세요');
      return;
    }
    if (loading) {
      setErrorMessage('');
      return;
    }
    if (!user.name) {
      setErrorMessage('재로그인 후 다시 작성해수제요');
      return;
    }

    post(title, content, user.name);
  };

  return (
    <section>
      <Heading text="공지 작성" />
      <LoadingAndValidationCheck loading={adminLoading} validation={admin}>
        <form onSubmit={onClickPost}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 w-full p-2 pl-4 mb-5 focus:outline-black"
            placeholder="제목"
          />
          <ReactQuill theme="snow" onChange={(e) => setContent(e)} className="h-96" />
          <button
            type="submit"
            className="p-4 bg-black text-white rounded-sm text-lg font-semibold w-full mt-16 mb-2">
            작성하기
          </button>
          <p className="text-red-500 text-center">{errorMessage}</p>
        </form>
      </LoadingAndValidationCheck>
    </section>
  );
};

export default NoticeNew;
