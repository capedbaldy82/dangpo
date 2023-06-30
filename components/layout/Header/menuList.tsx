import MenuLink from '@/components/layout/Header/menuLink';
import useAdmin from '@/hooks/useAdmin';

type Props = {
  toggle: () => void;
};

const MenuList = ({ toggle }: Props) => {
  const { admin } = useAdmin(false);
  return (
    <ul
      onClick={() => toggle()}
      className="absolute z-10 h-screen w-full left-0 top-0 flex flex-col justify-center items-center  bg-black bg-opacity-70">
      <MenuLink title="About" href="/about" />
      <MenuLink title="Notice" href="/notice" />
      <MenuLink title="Apply" href="/apply" />
      <MenuLink title="Review" href="/review" />
      {admin ? <MenuLink title="Admin" href="/admin" /> : null}
    </ul>
  );
};

export default MenuList;
