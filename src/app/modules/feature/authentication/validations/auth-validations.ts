export const AuthValidations = {
  verifyCode: {
    pattern: '^([a-zA-Z]|[0-9]){4}$',
  },
  password:{
    pattern:'^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$',
  }
};
