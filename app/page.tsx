import Entry from '@/components/home/entry';
import ReviewList from '@/components/home/reviewList';

const Home = () => {
  return (
    <main className="">
      <h2 className="hidden">Home</h2>
      <Entry />
      <ReviewList />
    </main>
  );
};

export default Home;
