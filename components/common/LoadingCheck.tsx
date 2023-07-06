import Spinner from '@/components/common/Spinner';

type Props = {
  loading: boolean;
  children: React.ReactNode;
  height?: string;
};

const LoadingCheck = ({ loading, children, height }: Props) => {
  return <>{loading ? <Spinner height={height} /> : children}</>;
};

export default LoadingCheck;
