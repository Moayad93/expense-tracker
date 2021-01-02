import React, { useState } from 'react';

function AddTransaction() {
  const [transaction, setTransaction] = useState({
    description: '',
    amount: 0
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setTransaction({ ...transaction, [name]: value });
  };

  const { description, amount } = transaction;

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="description">Name</label>
          <input type="text" name="description" id="description" placeholder="Enter text..." onChange={handleChange} value={description} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<br /> (negative - expense, positive - income)</label>
          <input type="number" name="amount" id="amount" placeholder="Enter amount..." onChange={handleChange} value={amount} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
