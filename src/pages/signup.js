import Header from "../components/header";
import classes from "./signup.module.css";
import { useRef } from "react";
import { useState } from "react";
const SignUp = () => {
  const usernameref = useRef();
  const passwordref = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = usernameref.current.value;
    const password = passwordref.current.value;
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBW3GZx2uNgUdGyl_TuZvjC-WtFDx6u2Fw",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    ).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        setIsSignedIn(true);
      } else {
        res.json().then((data) => {
          const errorMessage = data.error.message;
          alert(errorMessage);
        });
      }
    });
  };
  return (
    <div>
      <Header />
      <div className={classes.formcontainer}>
        <form onSubmit={onSubmitHandler} className={classes.form}>
          <h1>Sign Up</h1>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required ref={usernameref} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required ref={passwordref} />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input type="password" id="confirmpassword" required />
          {isSignedIn && (
            <p>
              {" "}
              &#9989; You have successfully created account. Login to continue.
            </p>
          )}
          {!isLoading && (
            <button type="submit" className={classes.btn}>
              Sign Up
            </button>
          )}
          {isLoading && <p>Sending Request ... </p>}
        </form>
      </div>
    </div>
  );
};
export default SignUp;
