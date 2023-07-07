import MenuButton from '@/components/layout/Header/menuButton';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <MenuButton />
      <Link href="/" className="text-3xl" aria-label="home link">
        Good Bye Box
      </Link>
      <Link href="/mypage" aria-label="mypage or login link">
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
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </Link>
    </header>
  );
};

export default Header;
