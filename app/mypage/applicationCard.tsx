import Image from 'next/image';

type Props = {
  image: string;
  title: string;
  content: string;
  status: 'standby' | 'ongoing' | 'done';
};

const APPLICATION_STATUS = {
  standby: '상품을 확인 중인 상태입니다.',
  ongoing: '판매 대행이 진행 중인 상품입니다.',
  done: '처리가 완료된 상품입니다.',
};

const ApplicationCard = ({ image, title, content, status }: Props) => {
  return (
    <li className="p-4 border border-black rounded-md overflow-hidden">
      <div className="w-full h-80 overflow-hidden relative object-cover mb-4">
        <Image
          src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${image}/adminproduct`}
          alt="사진"
          fill
          priority={true}
        />
      </div>
      <div className="space-y-2">
        <div className="flex">
          <p className="text-lg font-bold w-1/3 sm:w-1/5">상품명</p>
          <p>{title}</p>
        </div>
        <div className="flex">
          <p className="text-lg font-bold w-1/3 sm:w-1/5">상세 설명</p>
          <p>{content}</p>
        </div>
        <div className="flex">
          <p className="text-lg font-bold w-1/3 sm:w-1/5">진행 상태</p>
          <p>{APPLICATION_STATUS[status]}</p>
        </div>
      </div>
    </li>
  );
};

export default ApplicationCard;
