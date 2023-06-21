import React from 'react';

type Props = {
  children: React.ReactNode;
};

const NoticeLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default NoticeLayout;
