import { appFireStore } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useGetDoc = (transaction: string, docId: string) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const docRef = doc(appFireStore, transaction, docId);

  const getData = async () => {
    setLoading(true);

    try {
      const docSnap = await getDoc(docRef);
      const result = docSnap.data();
      if (result?.createdTime) {
        setData({ ...result, createdTime: result.createdTime.toDate() });
      } else {
        setData(result);
      }
    } catch (error: any) {
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
};

export default useGetDoc;
