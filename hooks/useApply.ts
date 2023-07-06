import { appFireStore, timestamp } from '@/firebase/config';
import { ApplicationFormType } from '@/types';
import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useUser from '@/hooks/useUser';

const useApply = () => {
  const { user } = useUser();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const apply = async (items: ApplicationFormType[], userDocId: string, email: string) => {
    if (!user.userDocId) {
      setError('로그인 상태를 확인해주시기 바랍니다.');
      return;
    }

    if (!user.name) {
      setError('로그인 상태를 확인해주시기 바랍니다.');
      return;
    }

    if (!user.applicationCount && user.applicationCount !== 0) {
      setError('로그인 상태를 확인해주시기 바랍니다.');
      return;
    }

    setLoading(true);

    const result = await Promise.all(
      items.map((item) =>
        ApplyEachCard(item, userDocId, email, user.name || 'anonymous').catch((error) => {
          setError(error.message);
        })
      )
    );

    await updateDoc(doc(appFireStore, 'user', user.userDocId), {
      applicationCount: user?.applicationCount + items.length,
    })
      .then(() => {
        setLoading(false);
        router.replace('/apply/done');
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  // Cloudflare 사진 업로드 URL 받기
  const getFileUploadUrl = async () => {
    const response = await fetch('/api/files');
    const result = await response.json();

    const { id, uploadURL } = result;

    return { id, uploadURL };
  };

  // ApplyFormCard 신청
  const ApplyEachCard = async (
    item: ApplicationFormType,
    userDocId: string,
    email: string,
    name: string
  ) => {
    const { uploadURL } = await getFileUploadUrl();

    // Clouldflare 사진 업로드
    const form = new FormData();
    form.append('file', item.image[0], item.title);

    const response = await fetch(uploadURL, { method: 'POST', body: form });
    const result = await response.json();
    const imageId = result.result.id;

    // Firestore 데이터 저장
    const colRef = collection(appFireStore, 'application');
    const createdTime = timestamp.fromDate(new Date());
    const docRef = await addDoc(colRef, {
      title: item.title,
      content: item.content,
      image: imageId,
      name,
      userDocId,
      email,
      status: 'standby',
      createdTime,
    })
      .then((result) => {
        if (!user?.userDocId) throw new Error();
        updateDoc(doc(appFireStore, 'user', user.userDocId), {
          application: arrayUnion(result.id),
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { error, loading, apply };
};

export { useApply };
