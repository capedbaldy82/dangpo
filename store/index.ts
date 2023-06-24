import { atom } from 'recoil';

type UserStateType = {
  name: string | null;
  email: string | null;
  uid: string | null;
  isAuthReady: boolean;
};

const UserState = atom<UserStateType>({
  key: 'UserState',
  default: {
    name: '',
    email: '',
    uid: '',
    isAuthReady: false,
  },
});

export { UserState };
