'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default LoginLayout;
