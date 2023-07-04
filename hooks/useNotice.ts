'use client';

import { appFireStore, timestamp } from '@/firebase/config';
import { addDoc, collection, doc, updateDoc } from '@firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useNotice = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const colRef = collection(appFireStore, 'notice');
  const router = useRouter();

  const post = async (title: string, content: string, name: string) => {
    setLoading(true);

    const createdTime = timestamp.fromDate(new Date());
    const docRef = await addDoc(colRef, { title, content, name, createdTime })
      .then(async (data) => {
        console.log(data.id);

        await updateDoc(doc(appFireStore, 'notice', data.id), { id: data.id });

        setLoading(false);

        router.push('/notice');
      })
      .catch((error) => {
        setLoading(false);
        setError(error.rmessage);
      });
  };

  return { loading, error, post };
};

export { useNotice };
