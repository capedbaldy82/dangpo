import SignupForm from '@/app/signup/signupForm';

const Signup = () => {
  return (
    <main className="flex flex-col items-center">
      <h2 className="my-16 text-3xl">회원가입</h2>
      <SignupForm />
    </main>
  );
};

export default Signup;
