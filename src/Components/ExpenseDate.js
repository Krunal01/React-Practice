import "./ExpenseDate.css";
function ExpenseDate(props) {
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // const day = props.date.getDate();
  // const month = props.date.getMonth();
  // const year = props.date.getFullYear();
  // const day = props.date.toLocalString(month);
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  const curDate = new Date().toLocaleDateString();
  return (
    <div className="expenseitem-date">
      {/* <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div> */}
      <div>{curDate}</div>
    </div>
  );
}
export default ExpenseDate;
