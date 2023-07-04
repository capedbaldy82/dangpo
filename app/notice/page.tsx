import NewLink from '@/app/notice/newLink';
import NoticeList from '@/app/notice/noticeList';
import Heading from '@/components/common/Heading';

const Notice = () => {
  return (
    <main>
      <Heading text="Notice" />
      <NoticeList />
      <NewLink />
    </main>
  );
};

export default Notice;
