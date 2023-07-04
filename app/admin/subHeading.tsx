import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SubHeading = ({ children }: Props) => {
  return <h3 className="text-2xl font-bold flex items-center mb-4">{children}</h3>;
};

export default SubHeading;
