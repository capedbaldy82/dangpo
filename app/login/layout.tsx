'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <div>{children}</div>
    </RecoilRoot>
  );
};

export default LoginLayout;