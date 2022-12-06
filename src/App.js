// import logo from './logo.svg';
// import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";
function App() {
  let expenses = [
    {
      id: 1,
      ExpenseDate: new Date(),
      ExpenseName: "Food ",
      ExpenseCost: 150,
    },
    {
      id: 1,
      ExpenseDate: new Date(),
      ExpenseName: "Books",
      ExpenseCost: 300,
    },
    {
      id: 1,
      ExpenseDate: new Date(),
      ExpenseName: "School Fee",
      ExpenseCost: 1500,
    },
    {
      id: 4,
      ExpenseDate: new Date(),
      ExpenseName: "House Rant",
      ExpenseCost: 700,
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        date={expenses[0].ExpenseDate}
        title={expenses[0].ExpenseName}
        cost={expenses[0].ExpenseCost}
      />
      <ExpenseItem
        date={expenses[1].ExpenseDate}
        title={expenses[1].ExpenseName}
        cost={expenses[1].ExpenseCost}
      />
      <ExpenseItem
        date={expenses[2].ExpenseDate}
        title={expenses[2].ExpenseName}
        cost={expenses[2].ExpenseCost}
      />
      <ExpenseItem
        date={expenses[3].ExpenseDate}
        title={expenses[3].ExpenseName}
        cost={expenses[3].ExpenseCost}
      />
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
