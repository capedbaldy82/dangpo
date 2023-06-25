const signupRegExp = {
  email: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^(?=.*[a-zA-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
  name: /[a-zA-z0-9가-힣]{2,10}$/,
  phone: /([0-9]{11})/,
};

export { signupRegExp };
