import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, useRoutes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Budgets from "../containers/budget/Budgets";
import Transactions from "../containers/transaction/Transactions";
import SignIn from "../components/auth/SignIn";
import LandingPage from "../components/LandingPage";
import SignUp from "../components/auth/SignUp";
import Navbar from "../components/Navbar";
import Products from "../containers/Products";
import AboutUs from "../containers/AboutUs";
import { useEffect } from "react";
import { getBudget } from "../containers/budget/budgetSlice";
import {
  login,
  logout,
  selectIsLoading,
  selectUserId,
} from "../containers/usersSlice";
import { getTransactions } from "../containers/transaction/transactionsSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Reports from "../containers/Reports";
import { Link } from "react-router-dom";


/** @type {RouteObject[]} */
const routes = [
  {
    path: "/login",
    element: (
      <div className="login-container">
        <SignIn />
        <SignUp />
      </div>
    ),
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/budgets",
    element: <Budgets />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
];

function Container() {
  const appRoutes = useRoutes(routes);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (userId) {
      dispatch(getBudget());
      dispatch(getTransactions());
    }
  }, [dispatch, userId]);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(JSON.parse(JSON.stringify(user))));
      } else {
        dispatch(logout());
      }
    });
    return () => {
      listen();
    };
  }, [dispatch]);

  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <>
      <Navbar />
      {appRoutes}
      <ToastContainer />
      <div className="footer">
        <Link to="/products">Products</Link>
        <Link to="/aboutUs">About Us</Link>
      </div>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
