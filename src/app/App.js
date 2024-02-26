import { Provider } from "react-redux";
import Budgets from "../containers/budget/Budgets";
import "./App.css";
import { store } from "./store";
import Transactions from "../containers/transaction/Transactions";
import TransactionForm from "../containers/transaction/TransactionForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import LandingPage from "../components/LandingPage";
import SignUp from "../components/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <SignIn />
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <div className="App">
          <div className="scroll">
            <header className="App-header">Expense Tracker</header>
            <Budgets />
            <Transactions />
          </div>
          <TransactionForm />
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
