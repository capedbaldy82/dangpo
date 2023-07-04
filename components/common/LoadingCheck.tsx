import Spinner from '@/components/common/Spinner';

type Props = {
  loading: boolean;
  children: React.ReactNode;
};

const LoadingCheckNew = ({ loading, children }: Props) => {
  return <>{loading ? <Spinner /> : children}</>;
};

export default LoadingCheckNew;
