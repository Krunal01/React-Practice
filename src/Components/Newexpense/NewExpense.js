import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const catchData = (enteredExpenseData) => {
    const receiveNewData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100),
    };

    props.onaddExpense(receiveNewData);
    console.log(receiveNewData);
  };

  return (
    <div className="newexpense">
      <ExpenseForm oncatchData={catchData} />
    </div>
  );
};
export default NewExpense;
