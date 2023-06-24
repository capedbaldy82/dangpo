'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

const MypageLayout = ({ children }: Props) => {
  return (
    <div>
      <RecoilRoot>{children}</RecoilRoot>
    </div>
  );
};

export default MypageLayout;
