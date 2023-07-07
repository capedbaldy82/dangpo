import Heading from '@/components/common/Heading';
import ReviewCard from '@/components/home/reviewCard';
import { appFireStore } from '@/firebase/config';
import { ReviewDocType } from '@/types';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

const getDocument = async () => {
  const result: ReviewDocType[] = [];
  const transactionRef = collection(appFireStore, 'review');

  const firestoreQuery = query(transactionRef, orderBy('createdTime', 'desc'), limit(2));

  const querySnapshot = await getDocs(firestoreQuery);

  querySnapshot.forEach((doc: any) => {
    result.push({ ...doc.data(), id: doc.id });
  });

  return result;
};

const ReviewList = async () => {
  const reviews = await getDocument();

  // const reviews = [
  //   {
  //     name: '김장현',
  //     content: '호기심으로 신청했는데 집안이 후련해졌습니다.',
  //     postId: '',
  //   },
  //   {
  //     name: '강정규',
  //     content: '평소에 시간이 없어서 신청해봤는데 기존에 두고만 있던 물건들이 팔려서 좋았습니다.',
  //     postId: '',
  //   },
  // ];

  return (
    <section className="w-full">
      <Heading text="고객 후기" />
      <ul className="flex space-x-4">
        {reviews &&
          reviews.map((card: any) => (
            <ReviewCard key={card.id} name={card.name} content={card.content} postId={card.id} />
          ))}
      </ul>
    </section>
  );
};

export default ReviewList;
