import React from "react";
import classes from "./Login.module.css";
import { Button } from "@mui/material";
import { useStateValue } from "../../Store/StateProvider";
import { actionTypes } from "../../Store/reducer";
import { auth, provider } from "../../firebase.js/firebase";

export default function Login() {
  const [/**state*/, dispatch] = useStateValue();

  // console.log("This is auth:", auth);
  
  const signInHandler = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(
          "This is the result of sign in ==>",
          result.user.multiFactor.user
        );

        console.log("dispatch is about to start");
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user.multiFactor.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={classes.login}>
      <div className={classes.Login__container}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsapp logo"
        />
        <div className={classes.login__text}>
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signInHandler}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
