import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const EmployeeNav = () => {
  const navigate = useNavigate();
  const localDaemonUser = localStorage.getItem("daemon_user");
  const daemonUserObject = JSON.parse(localDaemonUser);

  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/content">
          Content
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/likedContent">
          Liked Content
        </Link>
      </li>
      {localStorage.getItem("daemon_user") ? (
        <li className="navbar__item navbar__logout">
          <Link
            className="navbar__link"
            to=""
            onClick={() => {
              localStorage.removeItem("daemon_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
