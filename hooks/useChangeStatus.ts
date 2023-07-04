import { appFireStore } from '@/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

const useChangeStatus = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const changeStatus = async (type: string, id: string) => {
    setLoading(true);

    console.log('update start');

    await updateDoc(doc(appFireStore, 'application', id), { status: type }).catch((error) =>
      setError(error.message)
    );

    setLoading(false);
  };

  return { loading, error, changeStatus };
};

export { useChangeStatus };
