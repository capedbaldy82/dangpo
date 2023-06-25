'use client';

import { appAuth } from '@/firebase/config';
import { UserState } from '@/store';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const useUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [userState, setUserState] = useRecoilState(UserState);
  const router = useRouter();

  useEffect(() => {
    setIsPending(true);
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      if (user) {
        if (user.displayName && user.email && user.uid) {
          setUserState({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            isAuthReady: true,
          });
        }
      } else {
        router.push('/login');
      }

      setIsPending(false);

      // setuserState({ user, userState: true });
      // dispatch({ type: 'userState', payload: user });
    });
    return unsubscribe;
  }, []);

  return { loading: isPending, user: userState };
};

export default useUser;
