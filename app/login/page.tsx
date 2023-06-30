'use client';

import LoginForm from '@/app/login/loginForm';
import Link from 'next/link';

const Login = () => {
  return (
    <main className="flex flex-col items-center">
      <h2 className="my-32 text-3xl">로그인</h2>
      <LoginForm />
      <Link as="/signup" href="/signup" className=" text-gray-500 mt-10">
        회원가입
      </Link>
    </main>
  );
};

export default Login;
