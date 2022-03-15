import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2020');
  const expensesSub = expenses.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );

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
        {<ExpensesList expenses={expensesSub} />}
      </Card>
    </div>
  );
}

export default Expenses;
