'use client';
import MenuList from '@/components/layout/Header/menuList';
import { useEffect } from 'react';
import { useState } from 'react';

const MenuButton = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleMenu} id="menuButton">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {menu && <MenuList toggle={toggleMenu} />}
    </div>
  );
};

export default MenuButton;
