import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../components/header";
import "./auth.css";
import { useRef, useState } from "react";
const Auth = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [isLoading, SetIsLoading] = useState(false);
  let UserRef = useRef();
  let PassRef = useRef();
  const LogoutHandler = () => {
    SetIsLoggedIn(false);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const username = UserRef.current.value;
    const password = PassRef.current.value;
    SetIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBW3GZx2uNgUdGyl_TuZvjC-WtFDx6u2Fw",
      {
        method: "POST",
        body: JSON.stringify({
          email: username,
          password: password,
          returnSecureToken: true,
        }),
      }
    ).then((res) => {
      SetIsLoading(false);
      if (res.ok) {
        SetIsLoggedIn(true);
        UserRef = "";
        PassRef = "";
      } else {
        res.json().then((data) => {
          const errorMessage = data.error.Message;
          alert(errorMessage);
        });
      }
    });
  };
  return (
    <div>
      <Header loginStatus={isLoggedIn} logout={LogoutHandler} />
      <div className="formcontainer">
        <form className="form" onSubmit={SubmitHandler}>
          <h1>Login</h1>
          <label htmlFor="username">Username</label>
          <input type="text" ref={UserRef} />
          <label htmlFor="password">Password</label>
          <input type="password" ref={PassRef} />
          {isLoggedIn && <p> &#9989; You have successfully logged in.</p>}
          {!isLoading && (
            <Button type="submit" className="btn">
              Login
            </Button>
          )}
          {isLoading && <p>Logging in...</p>}
          <span>Not an existing User? Sign Up</span>
          <Link to="/signup">
            <Button className="btn-signup">SignUp</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Auth;
