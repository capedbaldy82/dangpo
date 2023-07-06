import { convertDate } from '@/libs/convertDate';
import Link from 'next/link';

type Props = {
  index: number;
  id: string;
  title: string;
  name: string;
  createdTime: Date;
};

const ReviewLink = ({ index, id, title, name, createdTime }: Props) => {
  return (
    <li className="flex justify-between border-b-2 border-b-black pb-2">
      <div className="flex space-x-4 w-full">
        <p className="flex">{index}</p>
        <Link href={`/review/${id}`} className="flex flex-grow">
          {title}
        </Link>
      </div>
      <div className="flex space-x-4">
        <p>{name}</p>
        <p>{convertDate(createdTime)}</p>
      </div>
    </li>
  );
};

export default ReviewLink;
