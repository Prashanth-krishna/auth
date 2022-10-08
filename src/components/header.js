import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./header.css";
const Header = (props) => {
  const loginstat = props.loginStatus;
  const LogoutHandler = () => {
    props.logout();
  };
  return (
    <div className="header-container">
      <Link to="/">
        <span>Auth</span>
      </Link>
      {!loginstat && (
        <Link to="/auth">
          <Button className="btn-login">Login</Button>
        </Link>
      )}
      {loginstat && (
        <Button className="btn-logout" onClick={LogoutHandler}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default Header;
