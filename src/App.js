// import logo from './logo.svg';
// import "./App.css";
import react, { useState } from "react";
import NewExpense from "./Components/Newexpense/NewExpense";
import Expenses from "./Components/Expenses";
let dummyExpenses = [
  // {
  //   id: 1,
  //   ExpenseDate: new Date(),
  //   ExpenseName: "Food ",
  //   ExpenseCost: 150,
  // },
  // {
  //   id: 1,
  //   ExpenseDate: new Date(),
  //   ExpenseName: "Books",
  //   ExpenseCost: 300,
  // },
  // {
  //   id: 1,
  //   ExpenseDate: new Date(),
  //   ExpenseName: "School Fee",
  //   ExpenseCost: 1500,
  // },
  // {
  //   id: 4,
  //   ExpenseDate: new Date(),
  //   ExpenseName: "House Rant",
  //   ExpenseCost: 700,
  // },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const onaddExpense = (expense) => {
    console.log(expense);
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div className="App">
      <NewExpense onaddExpense={onaddExpense} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
{
  /* <header className="App-header"> */
}
{
  /* <img src={logo} className="App-logo" alt="logo" /> */
}
{
  /* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */
}
{
  /* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
}
{
  /* </header> */
}
