import Link from 'next/link';

type Props = {
  title: string;
  href: string;
};

const MenuLink = ({ title, href }: Props) => {
  return (
    <li className="text-3xl mb-10 cursor-pointer">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default MenuLink;
