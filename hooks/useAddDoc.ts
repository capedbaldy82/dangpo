import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { appFireStore, timestamp } from '../firebase/config';

const useAddDoc = (transaction: any, route?: string | null) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const colRef = collection(appFireStore, transaction);
  const router = useRouter();

  const addDocument = async (data: any) => {
    setLoading(true);
    const createdTime = timestamp.fromDate(new Date());
    const docRef = await addDoc(colRef, { ...data, createdTime })
      .then(() => {
        setLoading(false);
        if (route) router.push(route);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });

    return;
  };

  const deleteDocument = (id: any) => {};

  return { addDocument, deleteDocument, error, loading };
};

export { useAddDoc };
