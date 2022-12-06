import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expenseitem">
      {/* <div className="expenseitem-date">{props.date.toISOString()}</div> */}
      <div className="expenseitem-date">
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
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
