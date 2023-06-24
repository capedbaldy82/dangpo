'use client';

import Profile from '@/app/mypage/profile';
import Heading from '@/components/common/Heading';
import { appAuth } from '@/firebase/config';
import useUser from '@/hooks/useUser';
import { UserState } from '@/store';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const Mypage = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const { loading, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user.isAuthReady) {
        router.replace('/login');
      }
    }
  }, [loading]);

  return (
    <main>
      {loading ? (
        'loading..'
      ) : user.isAuthReady ? (
        <div>
          <Heading text="My Page" />
          <Profile name={user.name || ''} />
        </div>
      ) : null}
    </main>
  );
};

export default Mypage;
