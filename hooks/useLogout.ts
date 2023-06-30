import { appAuth } from '@/firebase/config';
import { UserState } from '@/store';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { deleteCookie } from 'cookies-next';

const useLogout = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userState, setUserState] = useRecoilState(UserState);
  const router = useRouter();

  const logout = () => {
    setError(null);
    setLoading(true);

    signOut(appAuth)
      .then(() => {
        setUserState({ name: '', email: '', uid: '', isAuthReady: false });
        setError(null);
        setLoading(false);
        deleteCookie('accessToken');
        router.replace('/');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return { error, loading, logout };
};

export default useLogout;
