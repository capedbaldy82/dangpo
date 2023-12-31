import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string;
  title: string;
  content: string;
  status: 'standby' | 'ongoing' | 'done';
  applicationDocId?: string;
  reviewed?: boolean;
  reviewDocId?: string;
};

const APPLICATION_STATUS = {
  standby: '상품을 확인 중인 상태입니다.',
  ongoing: '판매 대행이 진행 중인 상품입니다.',
  done: '처리가 완료된 상품입니다.',
};

const ApplicationCard = ({
  applicationDocId,
  image,
  title,
  content,
  status,
  reviewed,
  reviewDocId,
}: Props) => {
  return (
    <li className="p-4 border border-black rounded-md overflow-hidden">
      <div
        className="w-full h-40 sm:h-80 overflow-hidden relative object-cover mb-4 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${image}/adminproduct)`,
        }}>
        {/* <Image
          src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${image}/adminproduct`}
          alt="사진"
          fill
          priority={true}
        /> */}
      </div>
      <div className="space-y-2">
        <div className="flex">
          <p className="text-lg font-bold w-1/3 sm:w-1/5">상품명</p>
          <p className="w-2/3 ">{title}</p>
        </div>
        <div className="flex">
          <p className="text-lg font-bold w-1/3 sm:w-1/5">상세 설명</p>
          <p className="w-2/3">{content}</p>
        </div>
        <div className="flex">
          <p className="text-lg font-bold w-1/3 sm:w-1/5">진행 상태</p>
          <p className="w-2/3">{APPLICATION_STATUS[status]}</p>
        </div>
      </div>
      {applicationDocId ? (
        reviewed ? (
          <div className="flex mt-4">
            <Link href={`/review/${reviewDocId}`} className="bg-black text-white p-2 rounded-md">
              리뷰 확인하기
            </Link>
          </div>
        ) : (
          <div className="flex mt-4">
            <Link
              href={`/review/new/${applicationDocId}`}
              className="bg-black text-white p-2 rounded-md">
              리뷰 작성하기
            </Link>
          </div>
        )
      ) : null}
    </li>
  );
};

export default ApplicationCard;
