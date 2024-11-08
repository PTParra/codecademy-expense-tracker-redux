import { Budgets } from "./features/budgets/budgets";
import { Transactions } from "./features/transactions/transactions";


export const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
        <Budgets />
        <Transactions />
      </header>
    </div>
  );
}