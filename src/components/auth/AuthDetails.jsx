import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../containers/usersSlice";

const AuthDetails = () => {
  const userEmail = useSelector(selectUserEmail);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {userEmail ? (
        <>
          <p>`Signed In as ${userEmail}`</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
