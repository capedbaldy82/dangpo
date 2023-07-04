import { appFireStore } from '@/firebase/config';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

const convertDate = (data: Date) => {
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();

  return `${year}.${month}.${date}`;
};

const getDocument = async (id: string) => {
  const docRef = doc(appFireStore, 'notice', id);
  const docSnap = await getDoc(docRef).then((result) => result.data());

  return docSnap;
};

const NoticeDetail = async ({ params: { slug } }: Props) => {
  const data = await getDocument(slug);

  if (!data?.id) return notFound();

  return (
    <div>
      <p className="text-2xl font-semibold mt-10">{data?.title}</p>
      <div className="flex justify-end mt-4 mb-10 text-gray-500">
        <div className="flex space-x-4 ">
          <p className="">{data?.name}</p>
          <p>{convertDate(data.createdTime.toDate())}</p>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data?.content }} />
    </div>
  );
};

export default NoticeDetail;

export const generateStaticParams = async () => {
  let res: any = [];

  const q = query(collection(appFireStore, 'notice'));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    res.push({ id: doc.id });
  });

  return res;
};
