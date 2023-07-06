import { useCollection } from '@/hooks/useCollection';
import LoadingCheck from '@/components/common/LoadingCheck';
import ApplicationCard from '@/app/mypage/applicationCard';
import SubHeading from '@/app/mypage/subHeading';
import { ApplicationDocType } from '@/types';

type Props = {
  uid: string;
};

const ApplicationList = ({ uid }: Props) => {
  const { documents, loading } = useCollection<ApplicationDocType>('application', [
    'uid',
    '==',
    uid,
  ]);

  return (
    <div className="space-y-4">
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
        신청 목록
      </SubHeading>
      <ul className="space-y-4">
        <LoadingCheck loading={loading}>
          {documents.map((application: ApplicationDocType) => {
            if (application.status === 'done') return null;

            return (
              <ApplicationCard
                key={application.id}
                image={application.image}
                title={application.title}
                content={application.content}
                status={application.status}
              />
            );
          })}
        </LoadingCheck>
      </ul>
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
        완료 목록
      </SubHeading>
      <ul className="space-y-4">
        <LoadingCheck loading={loading}>
          {documents.map((application: ApplicationDocType) => {
            if (application.status !== 'done') return null;

            return (
              <ApplicationCard
                key={application.id}
                applicationDocId={application.id}
                image={application.image}
                title={application.title}
                content={application.content}
                status={application.status}
                reviewed={application.reviewed}
                reviewDocId={application.reviewDocId}
              />
            );
          })}
        </LoadingCheck>
      </ul>
    </div>
  );
};

export default ApplicationList;
