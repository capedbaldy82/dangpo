import React from 'react';

type Props = {
  children: React.ReactNode;
};

const NoticeDetailLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default NoticeDetailLayout;
