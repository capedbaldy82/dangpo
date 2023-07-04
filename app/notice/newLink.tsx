'use client';

import useAdmin from '@/hooks/useAdmin';
import Link from 'next/link';

const NewLink = () => {
  const { admin } = useAdmin(false);

  return admin ? (
    <Link href="/notice/new" className="p-2 border border-black rounded-sm">
      글쓰기
    </Link>
  ) : null;
};

export default NewLink;
