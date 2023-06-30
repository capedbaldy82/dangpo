'use client';

import { appAuth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useAdmin = (routing: boolean = true) => {
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      if (routing) {
        if (!user) router.push('/');
        if (user?.email !== 'admin@gmail.com') router.push('/');
        setAdmin(true);
      } else {
        if (user?.email === 'admin@gmail.com') setAdmin(true);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { admin, loading };
};

export default useAdmin;
