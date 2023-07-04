import Spinner from '@/components/common/Spinner';

type Props = {
  loading: boolean;
  validation: boolean;
  children: React.ReactNode;
};

const LoadingAndValidationCheck = ({ loading, children, validation }: Props) => {
  return <>{loading ? <Spinner /> : validation ? children : null}</>;
};

export default LoadingAndValidationCheck;
