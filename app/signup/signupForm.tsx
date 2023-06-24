'use client';

import useSignup from '@/hooks/useSignup';
import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { signupRegExp } from '@/constants/signup';

type SignupFormType = {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
};

const SignupForm = () => {
  const { register, handleSubmit } = useForm<SignupFormType>();
  const { error, isPending, signup } = useSignup();
  const [errorMessage, setErrorMessage] = useState('');

  const onValid = (value: SignupFormType) => {
    if (isPending) return;

    signup(value.email, value.password, value.name);
  };

  const onInvalid = (error: FieldErrors) => {
    console.log(error);

    for (let value in error) {
      setErrorMessage(`${error[value]?.message}`);
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="flex flex-col w-full space-y-4 px-4">
      <input
        {...register('email', {
          required: { value: true, message: '이메일을 입력해주세요' },
          validate: (value) => signupRegExp.email.test(value) || '올바른 이메일 형식이 아닙니다',
        })}
        className="border border-gray-500 rounded-md p-4"
        placeholder="email"
      />
      <input
        {...register('name', {
          required: { value: true, message: '이름을 입력해주세요' },
          validate: (value) =>
            signupRegExp.name.test(value) || '2~10글자 내외의 한글, 영어, 숫자로 입력해주세요',
        })}
        className="border border-gray-500 rounded-md p-4"
        placeholder="name"
      />
      <input
        {...register('password', {
          required: { value: true, message: '비밀번호를 입력해주세요' },
          validate: (value) =>
            signupRegExp.password.test(value) ||
            '8~20글자 내외로 소문자, 대문자, 특수문자, 숫자를 포함해주세요',
        })}
        className="border border-gray-500 rounded-md p-4"
        placeholder="password"
        type="password"
      />
      <button type="submit" className="bg-black text-white rounded-md p-4">
        가입하기
      </button>
      <p className="text-center text-red-500">{errorMessage}</p>
      <p className="text-center text-red-500">{error && '이미 존재하는 이메일입니다'}</p>
    </form>
  );
};

export default SignupForm;
