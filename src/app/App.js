import { Provider } from "react-redux";
import Budgets from "../containers/budget/Budgets";
import "./App.css";
import { store } from "./store";
import Transactions from "../containers/transaction/Transactions";
import TransactionForm from "../containers/transaction/TransactionForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">Expense Tracker</header>
        <Budgets />
        <Transactions />
        <TransactionForm />
      </div>
    </Provider>
  );
}

export default App;
