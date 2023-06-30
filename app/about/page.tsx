import SubHeading from '@/app/about/SubHeading';
import Heading from '@/components/common/Heading';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <main>
      <Heading text="About" />
      <section>
        <article className="mb-32">
          <SubHeading text="서비스 소개" />
          <br />
          <p className="text-xl text-center">
            불필요한 공간 차지, 불확실한 거래 시간대, 지속적인 소통, 거래의 불발 등<br />
            쌓여가는 물건들을 간단한 신청을 통해 편하게 목돈을 마련해보세요
          </p>
        </article>
        <article className="flex flex-col items-center mb-32">
          <SubHeading text="서비스 이용 방법" />
          <br />
          <Image
            src="/image/service_process.png"
            alt="신청 물품 수령 중고 거래 대금 전달"
            width={400}
            height={200}
          />
          <Link
            className="text-lg bg-black text-white rounded-md py-1 px-2"
            as="/notice"
            href="/notice">
            자세히 알아보기
          </Link>
        </article>
        <article className="mb-32">
          <SubHeading text="가격 및 기타 정책" />
          <br />
          <h4 className="text-xl">1. 가격 정책</h4>
          <ul className="text-lg">
            <li>- 모든 수수료는 중고 거래 시 발생하는 금액의 20%가 발생합니다.</li>
          </ul>
          <br />
          <h4 className="text-xl">2. 기타 정책</h4>
          <ul className="text-lg">
            <li>
              - 중고 거래 예상 금액이 10,000원 이하로 예상될 경우 해당 물건은 반려될 수 있습니다.
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default About;
