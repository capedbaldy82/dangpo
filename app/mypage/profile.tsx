import SubHeading from '@/app/mypage/subHeading';
import useLogout from '@/hooks/useLogout';

type Props = {
  name: string;
};

const Profile = ({ name }: Props) => {
  const { logout } = useLogout();

  return (
    <section className="flex justify-between flex-col">
      <SubHeading>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        프로필 정보
      </SubHeading>
      <div className="flex justify-between items-center">
        <p className="text-2xl">{name}님</p>
        <button onClick={() => logout()} className="border border-black p-2 rounded-md">
          로그아웃
        </button>
      </div>
    </section>
  );
};

export default Profile;
