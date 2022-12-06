import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expenseitem">
      {/* <div className="expenseitem-date">{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expenseitem-name">{props.title}</div>
      <div className="expenseitem-cost">${props.cost}</div>
    </div>
  );
}

export default ExpenseItem;
{
  /* <div className="expenseitem-desc"> */
}
{
  /* </div> */
}
