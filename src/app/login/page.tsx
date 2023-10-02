import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "UMS | Login",
};
const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
