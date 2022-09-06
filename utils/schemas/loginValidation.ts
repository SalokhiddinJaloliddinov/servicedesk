import * as yup from "yup";

export const LoginValidation = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).required(),
});
