import React from "react";
import TransactionForm from "../containers/transaction/TransactionForm";
import Modal from "@mui/material/Modal";
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
                  boxShadow: "2px solid black",
                  height: 350,
                  width: 350,
                  margin: "auto",
                  bottom: "30%",
                }}
              >
                <div>
                  <TransactionForm handleClose={handleClose} />
                </div>
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
          <button className="sign-in-button" onClick={handleSignIn}>
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
