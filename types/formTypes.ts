type LoginFormType = {
  email: string;
  password: string;
};

type SignupFormType = {
  email: string;
  name: string;
  password: string;
  phone: string;
  address: string;
  addressDetail: string;
};

type ApplicationFormType = {
  id: number;
  title: string;
  content: string;
  image: any;
};

export type { LoginFormType, SignupFormType, ApplicationFormType };
