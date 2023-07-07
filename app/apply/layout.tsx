'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ApplyLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ApplyLayout;
