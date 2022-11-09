import { useNavigate } from "react-router-dom";
import { CustomerNav } from "./CustomerNav";
import { EmployeeNav } from "./EmployeeNav";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  const localDaemonUser = localStorage.getItem("daemon_user");
  const daemonUserObject = JSON.parse(localDaemonUser);

  if (daemonUserObject.staff) {
    return <EmployeeNav />;
  } else {
    return <CustomerNav />;
  }
};
