'use client';

import { useState } from 'react';
import { appAuth } from '@/firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAddDoc } from '@/hooks/useAddDoc';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const { addDocument, loading } = useAddDoc('user');

  const signup = (
    email: string,
    password: string,
    name: string,
    phone: string,
    address: string
  ) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (!user) {
          throw new Error('회원가입에 실패했습니다.');
        }

        if (!appAuth.currentUser) {
          throw new Error('회원가입에 실패했습니다.');
        }

        updateProfile(appAuth.currentUser, { displayName: name })
          .then(() => {
            addDocument({
              email,
              name,
              uid: user?.uid,
              phone,
              address,
              application: [],
              applicationCount: 0,
            });
            setError(null);
            setIsPending(false);
            router.push('/');
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { error, isPending, signup };
};

export default useSignup;
