'use client';

import LoadingCheck from '@/components/common/LoadingCheck';
import useGetDoc from '@/hooks/useGetDoc';
import Image from 'next/image';
import { useEffect } from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const convertDate = (data: Date) => {
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();

  return `${year}.${month}.${date}`;
};

const ReviewSLug = ({ params: { slug } }: Props) => {
  const { data, loading } = useGetDoc('review', slug);

  return (
    <main>
      <LoadingCheck loading={loading} height="h-72">
        {data ? (
          <div>
            <h3 className="text-2xl font-semibold mt-20">{data.title}</h3>
            <div className="flex justify-end text-gray-500 mt-5 mb-5">
              <p className="mr-4">{data.createdTime && convertDate(data.createdTime)}</p>
              <p>{data.name && data.name.substr(0, 3) + '**'}</p>
            </div>
            <div>
              <div className="relative h-72 overflow-hidden border border-black rounded-lg">
                <Image
                  src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${data.image}/adminproduct`}
                  alt="사진"
                  fill
                  priority={true}
                />
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} className="mt-5 text-lg" />
          </div>
        ) : null}
      </LoadingCheck>
    </main>
  );
};

export default ReviewSLug;
