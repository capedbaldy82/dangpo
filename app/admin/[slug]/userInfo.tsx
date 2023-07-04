import SubHeading from '@/app/admin/subHeading';
import LoadingCheck from '@/components/common/LoadingCheck';
import { useCollection } from '@/hooks/useCollection';

type Props = {
  uid: string;
};

const UserInfo = ({ uid }: Props) => {
  const { documents, loading } = useCollection('user', ['uid', '==', uid]);

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
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        신청자 정보
      </SubHeading>
      <LoadingCheck loading={loading}>
        {documents.map((user: any) => (
          <div className="p-4 border border-black rounded-md space-y-4" key={user.id}>
            <div className="flex">
              <p className="w-1/6 font-semibold">이름</p>
              <p>{user.name}</p>
            </div>
            <div className="flex">
              <p className="w-1/6 font-semibold">번호</p>
              <p>{user.phone}</p>
            </div>
            <div className="flex">
              <p className="w-1/6 font-semibold">주소</p>
              <p>{user.address}</p>
            </div>
          </div>
        ))}
      </LoadingCheck>
    </section>
  );
};

export default UserInfo;
