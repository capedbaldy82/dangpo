import React from 'react';

type Props = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default AboutLayout;
