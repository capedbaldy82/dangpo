import { appAuth } from '@/firebase/config';
import { UserState } from '@/store';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { setCookie } from 'cookies-next';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userState, setUserState] = useRecoilState(UserState);
  const router = useRouter();

  const login = (email: string, password: string) => {
    setError(null);
    setLoading(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        if (!user) {
          throw new Error('로그인에 실패했습니다.');
        }

        const accessToken = await user.getIdToken();

        setCookie('accessToken', accessToken);

        if (user.displayName && user.email && user.uid) {
          setUserState({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            isAuthReady: true,
          });
        }

        setError(null);
        setLoading(false);
        router.replace('/');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return { error, loading, login };
};

export default useLogin;
