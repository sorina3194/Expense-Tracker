import React, { useState } from "react";
import { signout } from "../../firebase";
import "./signin-up-out.css";

const SignOut = () => {
  return <button className="sign-out-button" onClick={signout}>Sign Out</button>;
};

export default SignOut;
