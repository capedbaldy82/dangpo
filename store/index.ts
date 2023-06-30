import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

type UserStateType = {
  name: string | null;
  email: string | null;
  uid: string | null;
  isAuthReady: boolean;
};

const UserState = atom({
  key: 'UserState',
  default: {
    id: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    uid: '',
    application: [],
    isAuthReady: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export { UserState };
