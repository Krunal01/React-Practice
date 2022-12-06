import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="main-form">
        <div className="expense-controls">
          <div className="expense-control">
            <label>Title</label>
            <input type="text" id="title" />
          </div>
          <div className="expense-control">
            <label>Cost</label>
            <input type="number" id="cost" min="0.01" />
          </div>
        </div>
        <div className="expense-btn">
          <div className="expense-control" id="date">
            <label>Date</label>
            <input type="date" id="date" />
          </div>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
