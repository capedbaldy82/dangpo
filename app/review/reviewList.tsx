'use client';

import ReviewLink from '@/app/review/reviewLink';
import LoadingCheck from '@/components/common/LoadingCheck';
import { useCollection } from '@/hooks/useCollection';
import { ReviewDocType } from '@/types';

const ReviewList = () => {
  const { documents, loading } = useCollection<ReviewDocType>('review');

  return (
    <div className="border-t-black border-b-black border-t-2 pt-2 pb-2">
      <LoadingCheck loading={loading}>
        {documents.map((review: ReviewDocType, index: number) => (
          <ReviewLink
            key={review.id}
            index={index}
            id={review.id}
            title={review.title}
            name={review.name}
            createdTime={review.createdTime}
          />
        ))}
      </LoadingCheck>
    </div>
  );
};

export default ReviewList;
