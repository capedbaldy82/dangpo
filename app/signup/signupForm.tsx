'use client';

import useSignup from '@/hooks/useSignup';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { signupRegExp } from '@/constants/signup';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import Spinner from '@/components/common/Spinner';

type SignupFormType = {
  email: string;
  name: string;
  password: string;
  phone: string;
  address: string;
  addressDetail: string;
};

const modalStyle = {
  overlay: {
    display: 'flex',
    justifyContents: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    margin: 'auto',
    width: '100%',
    maxWidth: '40rem',
    height: '600px',
    padding: '0',
    overflow: 'hidden',
  },
};

const postStyle = {
  height: '600px',
};

const SignupForm = () => {
  const { register, handleSubmit, setValue } = useForm<SignupFormType>();
  const { error, isPending, signup } = useSignup();
  const [errorMessage, setErrorMessage] = useState('');

  const onValid = (value: SignupFormType) => {
    if (isPending) return;

    setErrorMessage('');

    signup(
      value.email,
      value.password,
      value.name,
      value.phone,
      value.address + ' ' + value.addressDetail
    );
  };

  const onInvalid = (error: FieldErrors) => {
    console.log(error);

    for (let value in error) {
      setErrorMessage(`${error[value]?.message}`);
      return;
    }
  };

  // 주소 검색 관련
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 주소 검색 모달 토글
  const togglePopup = () => {
    setIsPopupOpen((current) => !current);
  };

  // 주소 검색 완료 시
  const onCompletePost = (data: any) => {
    setValue('address', `[${data?.zonecode}] ${data?.roadAddress}`);
    togglePopup();
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
        {...register('phone', {
          required: { value: true, message: '휴대폰 번호를 입력해주세요' },
          validate: (value) => signupRegExp.phone.test(value) || '11자의 숫자로 입력해주세요',
        })}
        className="border border-gray-500 rounded-md p-4"
        placeholder="phone ('-' 제외)"
      />
      <div className="flex space-x-4">
        <input
          {...register('address', {
            required: { value: true, message: '주소를 입력해주세요' },
          })}
          disabled={true}
          className="border border-gray-500 w-3/4 rounded-md p-4"
          placeholder="address"
        />
        <button
          type="button"
          onClick={togglePopup}
          className="bg-black text-white rounded-md p-4 w-1/4">
          검색
        </button>
      </div>
      {isPopupOpen ? (
        <Modal
          isOpen={isPopupOpen}
          ariaHideApp={false}
          onRequestClose={togglePopup}
          style={modalStyle}
          className="flex items-center">
          <DaumPostcode autoClose onComplete={onCompletePost} style={postStyle} />
        </Modal>
      ) : null}
      <input
        {...register('addressDetail', {
          required: { value: true, message: '주소를 입력해주세요' },
        })}
        className="border border-gray-500 rounded-md p-4"
        placeholder="address detail"
      />
      <button type="submit" className="bg-black text-white rounded-md p-4">
        {isPending ? <Spinner /> : '가입하기'}
      </button>
      <p className="text-center text-red-500">{errorMessage}</p>
      <p className="text-center text-red-500">{error && '이미 존재하는 이메일입니다'}</p>
    </form>
  );
};

export default SignupForm;
