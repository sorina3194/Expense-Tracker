import { Provider } from "react-redux";
import Budgets from "../containers/budget/Budgets";
import "./App.css";
import { store } from "./store";
import Transactions from "../containers/transaction/Transactions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import LandingPage from "../components/LandingPage";
import SignUp from "../components/auth/SignUp";
import Navbar from "../components/Navbar";
import Modal from "@material-ui/core/Modal";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <SignIn /> <SignUp />
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
]);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
