'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

const ApplyLayout = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <div>{children}</div>
    </RecoilRoot>
  );
};

export default ApplyLayout;
