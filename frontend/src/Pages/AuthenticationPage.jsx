import { useLocation } from "react-router-dom";
import LoginPure from "../Components/Pure/LoginPure";
import RegisterPure from "../Components/Pure/RegisterPure";

export default function AuthenticationPage() {
    const location = useLocation().pathname;
  return <div>{location === "/register" ? <RegisterPure /> : <LoginPure />}</div>;
}
