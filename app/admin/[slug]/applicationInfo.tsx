'use client';

import SubHeading from '@/app/admin/subHeading';
import ApplicationInfoCard from '@/app/admin/[slug]/applicationInfoCard';
import LoadingCheck from '@/components/common/LoadingCheck';
import { useCollection } from '@/hooks/useCollection';
import Image from 'next/image';
import { useEffect } from 'react';

type Props = {
  uid: string;
};

const ItemStatus = {
  standby: 'orange',
  ongoing: 'yellow',
  done: 'green',
};

const ApplicationInfo = ({ uid }: Props) => {
  const { documents, loading } = useCollection('application', ['uid', '==', uid]);

  useEffect(() => {
    console.log(documents);
  }, [documents]);

  return (
    <section>
      <SubHeading>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        신청 물품
      </SubHeading>
      <LoadingCheck loading={loading}>
        <ul className="space-y-4">
          {documents.map((application: any) => (
            <ApplicationInfoCard
              key={application.id}
              id={application.id}
              image={application.image}
              title={application.title}
              content={application.content}
              status={application.status}
            />
          ))}
        </ul>
      </LoadingCheck>
    </section>
  );
};

export default ApplicationInfo;
