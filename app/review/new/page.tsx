'use client';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <div className="h-[428px] border border-gray-300" />,
});

const ReviewNew = () => {
  return (
    <main>
      <ReactQuill theme="snow" className="h-96" modules={{ toolbar: false }} />
    </main>
  );
};

export default ReviewNew;
