import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, subTitle] = useState(props.title);

  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    subTitle('Updated!!!');

    console.log(title);
  };

  return (
    <Card className="expense-item" key={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
