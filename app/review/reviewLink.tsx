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
    <li className="flex justify-between border-b-2 border-b-black pb-2 mb-2">
      <div className="flex space-x-4 w-2/3">
        <p className="flex">{index}</p>
        <Link href={`/review/${id}`} className="flex flex-grow">
          {title}
        </Link>
      </div>
      <div className="flex justify-between w-1/3">
        <p className="w-1/2">{name.substr(0, name.length - 1) + '*'}</p>
        <p className="w-1/2">{convertDate(createdTime)}</p>
      </div>
    </li>
  );
};

export default ReviewLink;
