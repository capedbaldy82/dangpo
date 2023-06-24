import { appAuth } from '@/firebase/config';
import { UserState } from '@/store';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [userState, setUserState] = useRecoilState(UserState);
  const router = useRouter();

  const login = (email: string, password: string) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // dispatch({ type: 'login', payload: user });

        if (user) {
          if (user.displayName && user.email && user.uid) {
            setUserState({
              name: user.displayName,
              email: user.email,
              uid: user.uid,
              isAuthReady: true,
            });
          }
        }

        setError(null);
        setIsPending(false);
        router.replace('/');

        if (!user) {
          throw new Error('로그인에 실패했습니다.');
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { error, isPending, login };
};

export default useLogin;
