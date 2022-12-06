import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          date={expense.ExpenseDate}
          title={expense.ExpenseName}
          cost={expense.ExpenseCost}
        />
      ))}
    </div>
  );
}
export default Expenses;
{
  /* <ExpenseItem
        date={props.item[0].ExpenseDate}
        title={props.item[0].ExpenseName}
        cost={props.item[0].ExpenseCost}
      />
      <ExpenseItem
        date={props.item[1].ExpenseDate}
        title={props.item[1].ExpenseName}
        cost={props.item[1].ExpenseCost}
      />
      <ExpenseItem
        date={props.item[2].ExpenseDate}
        title={props.item[2].ExpenseName}
        cost={props.item[2].ExpenseCost}
      />
      <ExpenseItem
        date={props.item[3].ExpenseDate}
        title={props.item[3].ExpenseName}
        cost={props.item[3].ExpenseCost}
      /> */
}
