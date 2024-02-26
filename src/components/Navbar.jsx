import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import logo from '../img/abacus.png'
import "./navbar.css"
const Navbar = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <nav className="nav">
      <a href="/" className="abacus-logo">
        <img id="logo" src={logo} alt='logo' />
      </a>

      <div className="nav-list">
        {authUser ? (
          <>
            <a href="/budgets">Budgets</a>
            <a href="/transactions">Transactions</a>
          </>
        ) : null }
      </div>
    </nav>
  );
};

export default Navbar;
