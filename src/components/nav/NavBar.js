import "./NavBar.css";
import { PatronNav } from "./PatronNav";
import { StaffNav } from "./StaffNav";

export const NavBar = () => {
  const localDaemonUser = localStorage.getItem("daemon_user");
  const daemonUserObject = JSON.parse(localDaemonUser);

  if (daemonUserObject.staff) {
    return <StaffNav />;
  } else {
    return <PatronNav />;
  }
};
