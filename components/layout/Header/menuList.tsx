import MenuLink from '@/components/layout/Header/menuLink';

type Props = {
  toggle: () => void;
};

const MenuList = ({ toggle }: Props) => {
  return (
    <ul
      onClick={() => toggle()}
      className="absolute z-10 h-screen w-full left-0 top-0 flex flex-col justify-center items-center  bg-black bg-opacity-70">
      <MenuLink title="About" as="/about" href="/about" />
      <MenuLink title="Notice" as="/notice" href="/notice" />
      <MenuLink title="Apply" as="/apply" href="/apply" />
      <MenuLink title="Review" as="/review" href="/review" />
    </ul>
  );
};

export default MenuList;
