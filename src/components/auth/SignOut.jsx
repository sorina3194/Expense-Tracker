import React, { useState } from "react";
import { signout } from "../../firebase";

const SignOut = () => {
  return <button onClick={signout}>Sign Out</button>;
};

export default SignOut;
