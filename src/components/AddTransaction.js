import React from 'react';

function AddTransaction() {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<br /> (negative - expense, positive - income)</label>
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
