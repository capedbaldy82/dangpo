import Link from 'next/link';

const Entry = () => {
  return (
    <section className="relative -mx-8 py-40 flex flex-col items-center">
      <div className="flex flex-col items-center text-5xl space-y-4 font-dongle">
        <p>팔고싶은 물건이 있는데 시간이 없으신가요</p>
        <p>Good Bye Box에 넣어보세요</p>
      </div>
      {/* <div className="absolute bottom-6 right-6 px-2 py-1 text-sm rounded-md bg-black text-white">
        <Link as="/about" href="/about">
          알아보기
        </Link>
      </div> */}
    </section>
  );
};

export default Entry;
