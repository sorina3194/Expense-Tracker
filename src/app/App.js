import { Provider } from "react-redux";
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

/** @type {RouteObject[]} */
const routes = [
  {
    path: "/login",
    element: (
      <>
        <SignIn />
        <SignUp />
      </>
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
    path: "/products",
    element: <Products />
  },
  {
    path: "/aboutUs",
    element: <AboutUs />
  }
];

function Container() {
  const appRoutes = useRoutes(routes);

  return (
    <>
      <Navbar />
      {appRoutes}
      <ToastContainer />
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
