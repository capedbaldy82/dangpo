type Props = {
  text: string;
};

const SubHeading = ({ text }: Props) => {
  return <h3 className="text-center text-2xl sm:text-3xl">{text}</h3>;
};

export default SubHeading;
