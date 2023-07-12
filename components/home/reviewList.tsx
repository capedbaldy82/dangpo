import Heading from '@/components/common/Heading';
import ReviewCard from '@/components/home/reviewCard';
import { appFireStore } from '@/firebase/config';
import { ReviewDocType } from '@/types';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import Link from 'next/link';

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

  return (
    <section className="w-full">
      <Link href="/review" className="text-3xl mb-4 font-semibold">
        고객 후기
      </Link>
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
