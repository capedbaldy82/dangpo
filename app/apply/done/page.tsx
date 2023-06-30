import Link from 'next/link';

const Done = () => {
  return (
    <main className="flex flex-col items-center">
      <h2 className="my-32 text-4xl font-dongle">신청 완료</h2>
      <section className="flex flex-col text-center">
        <div className="text-2xl font-dongle mb-20 ">
          <p>신청 해주셔서 감사합니다</p>
          <p>빠른 시일 내 응답드리겠습니다</p>
        </div>
      </section>
    </main>
  );
};

export default Done;
