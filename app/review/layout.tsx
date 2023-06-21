import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ReviewLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ReviewLayout;
