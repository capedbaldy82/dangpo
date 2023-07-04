import React from 'react';

type Props = {
  children: React.ReactNode;
};

const NoticePostLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default NoticePostLayout;
