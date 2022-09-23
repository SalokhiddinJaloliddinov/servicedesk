import React from "react";
import { setCookie } from "nookies";
import { useForm, FormProvider } from "react-hook-form";
import { LoginDto } from "../../utils/api/types";
import { UserApi } from "../../utils/api";
import { Button, TextField } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginValidation } from "../../utils/schemas/loginValidation";
import { Alert } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUserData, setUserData } from "../../redux/slices/user";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginValidation),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, "sd_token", data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorMessage(false);
      dispatch(setUserData(data));
      console.log(data);
    } catch (err: any) {
      console.log(err.response);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };
  const [errorMessage, setErrorMessage] = React.useState(false);

  const userData = useAppSelector(selectUserData);

  // const onSubmit = (data: any) => console.log(data);
  console.log(form.formState.errors);
  return <>{userData ? <div>You are auth</div> : "You are not auth"}</>;
};
