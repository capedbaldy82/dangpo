'use client';

import ApplicationList from '@/app/mypage/applicationList';
import Profile from '@/app/mypage/profile';
import Heading from '@/components/common/Heading';
import LoadingAndValidationCheck from '@/components/common/LoadingAndValidationCheck';
import useUser from '@/hooks/useUser';

const Mypage = () => {
  const { loading, user } = useUser();

  return (
    <main>
      <Heading text="My Page" />
      <LoadingAndValidationCheck loading={loading} validation={user.isAuthReady}>
        <div className="space-y-20">
          <Profile name={user.name ?? ''} />
          <ApplicationList userDocId={user.userDocId ?? ''} />
        </div>
      </LoadingAndValidationCheck>
    </main>
  );
};

export default Mypage;
