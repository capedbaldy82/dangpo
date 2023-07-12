import Link from 'next/link';

type Props = {
  name: string;
  content: string;
  postId: string;
};

const ReviewCard = ({ name, content, postId }: Props) => {
  return (
    <li className="shadow-md w-1/2 p-4 h-40 hover:scale-105">
      <Link href={`/review/${postId}`} className="flex flex-col w-full h-full">
        <p className="mb-4 font-semibold text-xl">{name.substr(0, 2) + '*'}님 후기</p>
        <div dangerouslySetInnerHTML={{ __html: content.slice(0, 30) + '..' }} />
      </Link>
    </li>
  );
};

export default ReviewCard;
