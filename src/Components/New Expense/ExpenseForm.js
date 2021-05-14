import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  /*Initiatin UseState
  =========================================================================================================================*/
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  /*Asigning Click Handlers
  ==========================================================================================================================*/
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  };



  /*Submit Handlers
  ============================================================================================================================*/
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData);


    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  const [Clicked, setClicked] = useState(false)


  const clickedHandler = (event) => {
    event.preventDefault()
    setClicked(true)
  }

  const cancleHandler = (event) => {
    event.preventDefault()
    setClicked(false)
  }

  if (Clicked === false) {
    return (
      <form>
        <div className="new-expense__control">
          <button onClick={clickedHandler}>Add New Expenses</button>
        </div>
      </form>
    )
  }

  if (Clicked === true) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancleHandler}>Cancle</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

};

export default ExpenseForm;
