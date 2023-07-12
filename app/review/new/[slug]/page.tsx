'use client';

import Heading from '@/components/common/Heading';
import LoadingCheck from '@/components/common/LoadingCheck';
import Spinner from '@/components/common/Spinner';
import useGetDoc from '@/hooks/useGetDoc';
import { useReview } from '@/hooks/useReview';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

type Props = {
  params: {
    slug: string;
  };
};

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <div className="h-[428px] border border-gray-300" />,
});

const ReviewNewSlug = ({ params: { slug } }: Props) => {
  const { data, loading } = useGetDoc('application', slug);
  const [content, setContent] = useState('');
  const { post, loading: postLoading } = useReview();
  const router = useRouter();

  // 리뷰 작성한 상품 재작성 방지
  useEffect(() => {
    if (data && data.reviewed) {
      alert('이미 리뷰 작성이 완료된 상품입니다.');
      router.replace('/mypage');
    }
  }, [data]);

  const postReview = (content: string) => {
    if (postLoading) return;
    if (!content) return;

    console.log({
      title: data.title,
      content,
      image: data.image,
      name: data.name,
      applicationDocId: slug,
    });

    post({
      title: data.title,
      content,
      image: data.image,
      name: data.name,
      applicationDocId: slug,
    });
  };

  return (
    <div>
      <Heading text="리뷰 작성" />
      <LoadingCheck loading={loading}>
        <div className="flex flex-col rounded-md space-y-4">
          <div
            className="relative h-72 overflow-hidden border border-black rounded-lg  bg-no-repeat bg-center bg-contain"
            style={{
              backgroundImage: `url(https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${data.image}/adminproduct)`,
            }}>
            {/* <Image
              src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${data.image}/adminproduct`}
              alt="사진"
              fill
              priority={true}
            /> */}
          </div>
          <input
            type="text"
            value={data.title}
            disabled
            className="p-2 px-4 text-lg text-gray-500 bg-gray-200 rounded-lg border border-black"
          />
          <ReactQuill
            theme="snow"
            onChange={(e) => setContent(e)}
            className="h-40 border border-black rounded-lg overflow-hidden"
            modules={{ toolbar: false }}
          />
          <button
            onClick={() => postReview(content)}
            className="bg-black text-white p-4 rounded-md text-lg">
            {postLoading ? <Spinner /> : '작성하기'}
          </button>
        </div>
      </LoadingCheck>
    </div>
  );
};

export default ReviewNewSlug;
