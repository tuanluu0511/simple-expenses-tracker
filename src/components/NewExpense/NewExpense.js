import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //Take data from Form
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //Pass data to App.js
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* Pass function to expenseForm */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
