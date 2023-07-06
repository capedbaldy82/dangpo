'use client';

import NewIcon from '@/app/notice/newIcon';
import LoadingCheck from '@/components/common/LoadingCheck';
import { useCollection } from '@/hooks/useCollection';
import { convertDate } from '@/libs/convertDate';
import { NoticeDocType } from '@/types';
import Link from 'next/link';

const NoticeList = () => {
  const { documents, loading } = useCollection<NoticeDocType>('notice');

  return (
    <section className="mb-4 pt-4 pb-4 border-y-2 border-black">
      <LoadingCheck loading={loading}>
        <ul className=" space-y-4">
          {documents.map((notice: NoticeDocType, index: number) => (
            <li key={notice.id} className="flex justify-between font-semibold">
              <div className="flex items-center">
                <p className="w-[30px]">{documents.length - index}</p>
                <Link as={`/notice/${notice.id}`} href={`/notice/${notice.id}`}>
                  {notice.title}
                </Link>
                <NewIcon time={notice.createdTime} />
              </div>
              <p>{convertDate(notice.createdTime)}</p>
            </li>
          ))}
        </ul>
      </LoadingCheck>
    </section>
  );
};

export default NoticeList;
