'use client';

import Heading from '@/components/common/Heading';
import LoadingCheck from '@/components/common/LoadingCheck';
import useAdmin from '@/hooks/useAdmin';
import UserApplied from '@/app/admin/userApplied';

const Admin = () => {
  const { loading } = useAdmin();

  return (
    <main>
      <Heading text="Admin" />
      <LoadingCheck loading={loading}>
        <UserApplied />
      </LoadingCheck>
    </main>
  );
};

export default Admin;
