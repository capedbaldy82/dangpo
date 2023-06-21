import Heading from '@/components/common/Heading';
import ReviewCard from '@/components/home/reviewCard';

const ReviewList = () => {
  const reviews = [
    {
      name: '김장현',
      content: '호기심으로 신청했는데 집안이 후련해졌습니다.',
      postId: 1,
    },
    {
      name: '강정규',
      content: '평소에 시간이 없어서 신청해봤는데 기존에 두고만 있던 물건들이 팔려서 좋았습니다.',
      postId: 2,
    },
  ];

  return (
    <section className="w-full">
      <Heading text="고객 후기" />
      <ul className="flex space-x-4">
        {reviews.map((card) => (
          <ReviewCard
            key={card.postId}
            name={card.name}
            content={card.content}
            postId={card.postId + ''}
          />
        ))}
      </ul>
    </section>
  );
};

export default ReviewList;
