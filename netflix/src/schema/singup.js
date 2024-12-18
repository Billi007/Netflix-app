import * as yup from 'yup'

const signupSchema = yup.object().shape({
    email: yup
    .string()
    .email('Invalid email address.')
    .required('Email is required.'),
   

    password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required."),

    fullname: yup
    .string().required('Full name is required.').min(2),
  })
  

  export default signupSchema