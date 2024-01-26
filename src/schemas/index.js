import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const emailRules =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const registerSchema = yup.object().shape({
  name: yup.string().min(2).required('required field'),
  email: yup
    .string()
    .email('This is an ERROR email')
    .matches(emailRules)
    .required('required field'),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, {
      message:
        'Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit.',
    })
    .required('required field'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('This is an ERROR email')
    .required('required field'),
  password: yup.string().required('required field'),
});

export const contactSchema = yup.object().shape({
  contactName: yup
    .string()
    .min(3, 'The name must be at least 3 characters.')
    .max(22, 'The name must be 22 characters or less.')
    .required('The name is required.'),
  contactNumber: yup
    .string()
    .max(20, 'The phone number must be 20 characters or less.')
    .matches(/^(?:\+\d|[\d\s\-./()]){10,20}$/, 'Invalid number.')
    .nullable()
    .transform(v => (v === '' ? null : v)),
});
