type Props = {
  children: React.ReactNode;
};

const SubHeading = ({ children }: Props) => {
  return <h3 className="text-2xl font-bold flex items-center">{children}</h3>;
};

export default SubHeading;
