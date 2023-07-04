'use client';

import ApplicationInfo from '@/app/admin/[slug]/applicationInfo';
import UserInfo from '@/app/admin/[slug]/userInfo';
import Heading from '@/components/common/Heading';

type Props = {
  params: {
    slug: string;
  };
};

const ApplicationDetail = ({ params }: Props) => {
  return (
    <div>
      <Heading text="Application Detail" />
      <div className="space-y-8">
        <UserInfo uid={params.slug} />
        <ApplicationInfo uid={params.slug} />
      </div>
    </div>
  );
};

export default ApplicationDetail;
