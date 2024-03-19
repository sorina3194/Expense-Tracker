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
import { useSelector } from "react-redux";
import { selectUserId } from "../containers/usersSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);

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
    <nav>
        {userId ? (
          <>
            <label className="hamburger-menu">
              <input type="checkbox" />
            </label>
            <aside className="sidebar">
              <nav className="nav">
                <Link to="/budgets">BUDGETS</Link>
                <Link to="/transactions">TRANSACTIONS</Link>
                <Link to="/reports">REPORTS</Link>
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
                <SignOut
                  style={{
                    color: "rgb(92, 138, 141)",
                    borderRadius: 5,
                  }}
                />
              </nav>
            </aside>
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
        <Link to="/" className="abacus-logo">
          <img id="logo" src={logo} alt="logo" />
        </Link>
    </nav>
  );
};

export default Navbar;
