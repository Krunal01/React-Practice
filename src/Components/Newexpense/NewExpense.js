import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const catchData = (receiveData) => {
    const receiveNewData = {
      ...receiveData,
      id: Math.floor(Math.random() * 100),
    };
    props.onnewReceivedExpense(receiveNewData);
    console.log(receiveNewData);
  };
  return (
    <div className="newexpense">
      <ExpenseForm oncatchData={catchData} />
    </div>
  );
};
export default NewExpense;
