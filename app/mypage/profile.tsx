import useLogout from '@/hooks/useLogout';

type Props = {
  name: string;
};

const Profile = ({ name }: Props) => {
  const { logout } = useLogout();

  return (
    <section>
      <p>{name}님 환영합니다.</p>
      <button onClick={() => logout()} className="border border-black p-2 rounded-md">
        로그아웃
      </button>
    </section>
  );
};

export default Profile;
