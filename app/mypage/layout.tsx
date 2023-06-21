import React from 'react';

type Props = {
  children: React.ReactNode;
};

const MypageLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default MypageLayout;
