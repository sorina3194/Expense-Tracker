import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "./signin-up-out.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => {
    // Calling toast method by passing string
    toast("User created successfully, please login");
  };
  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form className="sign-up-container" onSubmit={signUp}>
        <h1 className="title">Create an account</h1>
        <input
          className="input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={notify} className="sign-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
