import { appAuth } from '@/firebase/config';
import { UserState } from '@/store';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [userState, setUserState] = useRecoilState(UserState);
  const router = useRouter();

  const logout = () => {
    setError(null);
    setIsPending(true);

    signOut(appAuth)
      .then(() => {
        setUserState({ name: '', email: '', uid: '', isAuthReady: false });
        setError(null);
        setIsPending(false);
        router.replace('/');
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { error, isPending, logout };
};

export default useLogout;
