const signupRegExp = {
  email: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^(?=.*[a-zA-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
  name: /[a-zA-z0-9가-힣]{2,10}$/,
  phone: /([0-9]{11})/,
};

const modalStyle = {
  overlay: {
    display: 'flex',
    justifyContents: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    margin: 'auto',
    width: '100%',
    maxWidth: '40rem',
    height: '600px',
    padding: '0',
    overflow: 'hidden',
  },
};

const postStyle = {
  height: '600px',
};

export { signupRegExp, modalStyle, postStyle };
