import Link from 'next/link';

type Props = {
  title: string;
  as: string;
  href: string;
};

const MenuLink = ({ title, as, href }: Props) => {
  return (
    <li className="text-3xl mb-10 cursor-pointer">
      <Link as={as} href={href}>
        {title}
      </Link>
    </li>
  );
};

export default MenuLink;
