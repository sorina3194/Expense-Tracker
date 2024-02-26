import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import TransactionForm from "../containers/transaction/TransactionForm";
import Modal from "@material-ui/core/Modal";
import logo from "../img/abacus.png";
import "./navbar.css";
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

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <nav className="nav">
      <div className="nav-list">
        {authUser ? (
          <>
            <a href="/budgets">Budgets</a>
            <a href="/transactions">Transactions</a>
            <button type="button" onClick={handleOpen}>
              New Transaction
            </button>
            <Modal
              onClose={handleClose}
              open={open}
              style={{
                border: "2px solid #000",
                boxShadow: "2px solid black",
                height: 350,
                width: 350,
                margin: "auto",
              }}
            >
              <TransactionForm />
            </Modal>
          </>
        ) : null}
      </div>
      <a href="/" className="abacus-logo">
        <img id="logo" src={logo} alt="logo" />
      </a>
    </nav>
  );
};

export default Navbar;
