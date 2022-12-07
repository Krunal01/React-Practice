import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [Title, setTitle] = useState("");
  const [Cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const titleChanging = (e) => {
    setTitle(e.target.value);
  };
  const costChanging = (e) => {
    setCost(e.target.value);
  };
  const dateChanging = (e) => {
    setDate(e.target.value);
    // document.write(e.target.value);
    // const curDate = setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: Title,
      cost: Cost,
      date: date,
      // date: curDate,
    };
    props.oncatchData(expenseData);
    console.log(expenseData);
    setTitle("");
    setCost("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="main-form">
        <div className="expense-controls">
          <div className="expense-control">
            <label>Title</label>
            <input
              type="text"
              id="title"
              value={Title}
              onChange={titleChanging}
            />
          </div>
          <div className="expense-control">
            <label>Cost</label>
            <input
              type="number"
              id="cost"
              min="1"
              value={Cost}
              onChange={costChanging}
            />
          </div>
        </div>
        <div className="expense-btn">
          <div className="expense-control" id="date">
            <label>Date</label>
            <input type="date" id="date" value={date} onChange={dateChanging} />
          </div>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
