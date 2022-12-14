import { setTitle } from "@util/helper";
import { ReactElement, FC } from "react";
import LoginContent from "@modules/Auth/Login/Content";
import Guest from "@modules/Auth/Middleware/Guest";

const Login: FC = (): ReactElement => {
  setTitle("Login");
  return (
    <Guest>
      <LoginContent />
    </Guest>
  );
};

export default Login;
