// import logo from './logo.svg';
// import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";
function App() {
  let ExpenseDate = new Date();
  let ExpenseName = "School Fee";
  let ExpenseCost = 300;
  return (
    <div className="App">
      <ExpenseItem date={ExpenseDate} title={ExpenseName} cost={ExpenseCost} />
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
