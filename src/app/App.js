import { Provider } from "react-redux";
import Budgets from "../containers/budget/Budgets";
import "./App.css";
import { store } from "./store";
import Transactions from "../containers/transaction/Transactions";
import { BrowserRouter, useRoutes } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import LandingPage from "../components/LandingPage";
import SignUp from "../components/auth/SignUp";
import Navbar from "../components/Navbar";

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
];

function Container() {
  const appRoutes = useRoutes(routes);

  return (
    <>
      <Navbar />
      {appRoutes}
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
