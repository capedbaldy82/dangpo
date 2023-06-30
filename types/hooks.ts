// useUser
type UserDocType = {
  id: string | null;
  name: string | null;
  email: string | null;
  address: string | null;
  phone: string | null;
  application: string[] | [];
  uid: string | null;
  isAuthReady: boolean;
};

export type { UserDocType };
