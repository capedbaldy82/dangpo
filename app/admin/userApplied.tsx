'use client';

import SubHeading from '@/app/admin/subHeading';
import LoadingCheck from '@/components/common/LoadingCheck';
import { useCollection } from '@/hooks/useCollection';
import Link from 'next/link';

const UserApplied = () => {
  const { documents, loading } = useCollection('user', ['applicationCount', '>', 0]);

  return (
    <div>
      <SubHeading>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
          />
        </svg>
        신청자 목록
      </SubHeading>
      <LoadingCheck loading={loading}>
        <ul className="flex flex-col space-y-4">
          {documents.map((user: any) => (
            <Link
              href={`/admin/${user.uid}`}
              key={user.id}
              className="border border-black p-4 rounded-md">
              {user.name}
            </Link>
          ))}
        </ul>
      </LoadingCheck>
    </div>
  );
};

export default UserApplied;
