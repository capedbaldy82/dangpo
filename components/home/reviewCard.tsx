import Link from 'next/link';

type Props = {
  name: string;
  content: string;
  postId: string;
};

const ReviewCard = ({ name, content, postId }: Props) => {
  return (
    <li className="shadow-md w-1/2 p-4 h-40">
      <p className="mb-4 font-semibold text-xl">{name}님 후기</p>
      <p>{content.slice(0, 30)}..</p>
    </li>
  );
};

export default ReviewCard;
