import React, { useState, useContext, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
  const { addTransaction, transactions } = useContext(GlobalContext);

  const [transaction, setTransaction] = useState({
    id: Number(),
    text: String(),
    amount: Number(),
  });

  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    const { id, text, amount } = data;
    const newTransaction = {
      id: parseInt(id),
      text,
      amount: parseInt(amount),
    };

    setTransaction(newTransaction);
    addTransaction(newTransaction);
    reset();
  }

  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          type="hidden"
          name="id"
          id="id"
          value={Math.floor(Math.random() * 100000000)}
        />
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input
            ref={register}
            type="text"
            name="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br /> (negative - expense, positive - income)
          </label>
          <input
            ref={register}
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      {/* <div style={{ color: 'red' }}>
        {Object.keys(errors).length > 0 &&
          'There are errors, check your console.'}
      </div> */}
    </Fragment>
  );
}

export default AddTransaction;