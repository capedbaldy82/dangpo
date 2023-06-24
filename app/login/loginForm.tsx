'use client';

import Spinner from '@/components/common/Spinner';
import useLogin from '@/hooks/useLogin';
import { FieldErrors, useForm } from 'react-hook-form';

type LoginFormType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormType>();
  const { error, isPending, login } = useLogin();

  const onValid = (value: LoginFormType) => {
    console.log(value);
    login(value.email, value.password);
  };

  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="flex flex-col justify-center px-4 w-full space-y-4">
      <input
        type="text"
        {...register('email')}
        className="border border-gray-500 rounded-md px-2 py-4"
        placeholder="email"
      />
      <input
        type="password"
        {...register('password')}
        className="border border-gray-500 rounded-md px-2 py-4"
        placeholder="password"
      />
      <button
        type="submit"
        className="flex justify-center bg-black text-white text-lg px-2 py-4 rounded-md">
        {isPending ? <Spinner /> : '로그인'}
      </button>
      <p className="text-center text-red-500">{error && '이메일 혹은 비밀번호를 확인해주세요'}</p>
    </form>
  );
};

export default LoginForm;
