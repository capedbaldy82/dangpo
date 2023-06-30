import Spinner from '@/components/common/Spinner';

type useLoadingProps = {
  loading: boolean;
  validation?: boolean;
  children: React.ReactNode;
};

const LoadingCheck = ({ loading, children, validation = true }: useLoadingProps) => {
  return <div>{loading ? <Spinner /> : validation ? children : null}</div>;
};

export default LoadingCheck;
