import SignupForm from '@/app/signup/signupForm';

const Signup = () => {
  return (
    <main className="flex flex-col items-center">
      <h2 className="my-32 text-5xl font-dongle">회원가입</h2>
      <SignupForm />
    </main>
  );
};

export default Signup;
