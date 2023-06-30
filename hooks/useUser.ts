'use client';

import { appAuth, appFireStore } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type UserDocType = {
  id: string | null;
  name: string | null;
  email: string | null;
  address: string | null;
  phone: string | null;
  application: string[] | [];
  applicationCount: number | null;
  uid: string | null;
  isAuthReady: boolean;
};

const useUser = () => {
  const [loading, setLoading] = useState(true);
  const [authStateLoading, setAuthStateLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState<UserDocType>({
    id: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    application: [],
    applicationCount: 0,
    uid: '',
    isAuthReady: false,
  });
  const router = useRouter();

  // 로그인 상태 확인 및 AuthState 설정
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      if (!user) {
        setLoading(false);
        router.push('/login');
        return;
      }

      setUser((prev: UserDocType) => {
        return {
          ...prev,
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          isAuthReady: true,
        };
      });

      setAuthStateLoading(false);
    });

    return unsubscribe;
  }, []);

  // Auth State 설정이 될 경우 Store 내 유저 정보 저장
  useEffect(() => {
    if (authStateLoading) return;

    const myQuery = query(collection(appFireStore, 'user'), where('uid', '==', user.uid));
    const unsubscribe = onSnapshot(
      myQuery,
      (snapshot: any) => {
        snapshot.docs.forEach((doc: any) => {
          setUser((prev: UserDocType) => {
            return {
              ...prev,
              ...doc.data(),
              id: doc.id,
            };
          });
        });
        setLoading(false);
      },
      (error: any) => {
        setError(error.message);
      }
    );

    return unsubscribe;
  }, [authStateLoading, collection]);

  return { user, loading, error };
};

export default useUser;
