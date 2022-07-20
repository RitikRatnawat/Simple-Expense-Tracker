import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [];

const App = () => 
{
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expense) =>
  {
    setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
