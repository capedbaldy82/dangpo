import ApplyForm from '@/app/apply/applyForm';
import ApplyFormList from '@/app/apply/applyFormList';
import Heading from '@/components/common/Heading';

const Apply = () => {
  return (
    <main>
      <Heading text="Apply" />
      {/* <ApplyForm /> */}
      <ApplyFormList />
    </main>
  );
};

export default Apply;
