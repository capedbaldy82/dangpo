type Props = {
  text: string;
};

const Heading = ({ text }: Props) => {
  return <h2 className="text-3xl my-4 font-semibold">{text}</h2>;
};

export default Heading;
