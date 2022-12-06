import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const onclickHandler = () => {
    setTitle("New Title..");
  };
  return (
    <div className="expenseitem">
      <ExpenseDate date={props.date} />
      <div className="expenseitem-name">{title}</div>
      <div className="expenseitem-cost">${props.cost}</div>
      <button onClick={onclickHandler}>Change Title</button>
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
{
  /* <div className="expenseitem-date">{props.date.toISOString()}</div> */
}
