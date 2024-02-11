import { Provider } from "react-redux";
import Budgets from "../containers/budget/Budgets";
import "./App.css";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">Expense Tracker</header>
        <Budgets />
      </div>
    </Provider>
  );
}

export default App;
