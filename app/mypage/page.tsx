'use client';

import Application from '@/app/mypage/application';
import Profile from '@/app/mypage/profile';
import Heading from '@/components/common/Heading';
import LoadingCheck from '@/components/common/LoadingCheck';
import useUser from '@/hooks/useUser';

const Mypage = () => {
  const { loading, user } = useUser();

  return (
    <main>
      <Heading text="My Page" />
      <LoadingCheck loading={loading} validation={user.isAuthReady}>
        <div className="space-y-20">
          <Profile name={user.name ?? ''} />
          <Application uid={user.uid ?? ''} />
        </div>
      </LoadingCheck>
    </main>
  );
};

export default Mypage;
