import React, { useContext, Fragment } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  );
}

export default TransactionList;