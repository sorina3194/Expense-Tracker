import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import TransactionForm from "../containers/transaction/TransactionForm";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import logo from "../img/ABACUS.png";
import "./navbar.css";
import SignOut from "./auth/SignOut";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUserId } from "../containers/usersSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });
    return () => {
      listen();
    };
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className="nav-list">
        <Link to="/" className="abacus-logo">
          <img id="logo" src={logo} alt="logo" />
        </Link>
        {userId ? (
          <>
            <Link to="/budgets">BUDGETS</Link>
            <Link to="/transactions">TRANSACTIONS</Link>
            <button
              type="button"
              id="new-transaction-button"
              onClick={handleOpen}
            >
              NEW TRANSACTION
            </button>
            <Modal
              className=""
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
              <TransactionForm handleClose={handleClose} />
            </Modal>
            <Link to="/products">Products</Link>
            <Link to="/aboutUs">About Us</Link>
            <SignOut
              style={{
                color: "rgb(92, 138, 141)",
                fontSize: 30,
                borderRadius: 5,
              }}
            />
          </>
        ) : (
          <>
            <Link to="/products">Products</Link>
            <Link to="/aboutUs">About Us</Link>
            <button className="sign-button" onClick={handleSignIn}>
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
