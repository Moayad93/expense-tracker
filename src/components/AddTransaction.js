import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddTransaction() {
  const [transaction, setTransaction] = useState({
    description: '',
    amount: 0
  });

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    alert(JSON.stringify(data));
  }

  const { description, amount } = transaction;

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="description">Name</label>
          <input ref={register} type="text" name="description" id="description" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<br /> (negative - expense, positive - income)</label>
          <input ref={register} type="number" name="amount" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
