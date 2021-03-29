import React from 'react';

function Transaction({ transaction }) {
  let sign;
  let labelColor;

  switch (true) {
    case transaction.amount < 0:
      sign = '-';
      labelColor = 'minus';
      break;
    case transaction.amount > 0:
      sign = '+';
      labelColor = 'plus';
      break;
    default:
      sign = '';
      labelColor = 'zero';
      break;
  }

  return (
    <li className={labelColor}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn">x</button>
    </li>
  );
}

export default Transaction;
