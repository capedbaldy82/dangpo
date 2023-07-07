import { appAuth } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteCookie } from 'cookies-next';

const useLogout = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const logout = () => {
    setLoading(true);

    signOut(appAuth)
      .then(() => {
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
