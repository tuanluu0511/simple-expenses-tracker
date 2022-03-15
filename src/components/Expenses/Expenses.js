import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2020');
  const expensesSub = expenses.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );

  let expenseContent = <p>No expenses found</p>;
  if (expensesSub.length > 1)
    expenseContent = expensesSub.map((exp) => generateExpense(exp));

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

  //Listen to year filter event
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
