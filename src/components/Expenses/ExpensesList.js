import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  function generateExpense(expenses) {
    return (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      ></ExpenseItem>
    );
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((exp) => generateExpense(exp))}
    </ul>
  );
};

export default ExpensesList;
