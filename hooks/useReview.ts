'use client';

import { appFireStore, timestamp } from '@/firebase/config';
import { addDoc, collection, updateDoc } from '@firebase/firestore';
import { doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useReview = () => {
  const [routingId, setRoutingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const colRef = collection(appFireStore, 'review');
  const router = useRouter();

  const post = async (data: any) => {
    setLoading(true);
    // 리뷰 doc 생성

    const createdTime = timestamp.fromDate(new Date());
    await addDoc(colRef, { ...data, createdTime })
      .then((result) => {
        console.log(result.id);
        setRoutingId(result.id);
      })
      .catch((error) => {
        setError(error);
      });

    // 상품 doc 수정
    await updateDoc(doc(appFireStore, 'application', data.applicationDocId), {
      reviewed: true,
      reviewDocId: routingId,
    })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    if (!loading && routingId) {
      router.replace(`/review/${routingId}`);
    }
  }, [loading]);

  return { loading, error, post };
};

export { useReview };
