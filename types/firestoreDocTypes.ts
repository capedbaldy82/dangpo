type ApplicationDocType = {
  id: string;
  name: string;
  image: string;
  title: string;
  content: string;
  status: 'standby' | 'ongoing' | 'done';
  uid: string;
  userDocId: string;
  reviewed: boolean;
  reviewDocId: string;
};

type ReviewDocType = {
  id: string;
  name: string;
  title: string;
  image: string;
  content: string;
  createdTime: Date;
  applicationDocId: string;
};

type NoticeDocType = {
  id: string;
  name: string;
  title: string;
  content: string;
  createdTime: Date;
};

type UserDocType = {
  address: string;
  application: string[] | [];
  applicationCount: number;
  createdTime: Date;
  email: string;
  name: string;
  phone: string;
  uid: string;
};

export type { ApplicationDocType, ReviewDocType, NoticeDocType, UserDocType };
