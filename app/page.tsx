import Entry from '@/components/main/entry';
import ReviewList from '@/components/main/reviewList';

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
