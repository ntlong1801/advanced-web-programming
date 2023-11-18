import yup from '../yupGlobal';

const checkSignUp = yup.object().shape({
  username: yup
    .string()
    .required('Required')
    .min(6),
  password: yup
    .string()
    .required('Required')
    .password('Password invalid'),
});

export const checkChangeProfile = yup.object().shape({
  email: yup.email
});

export default checkSignUp;
