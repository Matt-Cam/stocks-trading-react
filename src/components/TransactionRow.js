import React from 'react';

const TransactionRow = ({ transaction, index }) => {
  return (
    <div class='stock-transactions__grid-row'>
      <div class='stock-transactions__grid-cell'>
        <span class='stock-transactions__grid-text'>{index}</span>
      </div>
      <div class='stock-transactions__grid-cell'>
        <span class='stock-transactions__grid-text'>{transaction.symbol}</span>
      </div>
      <div class='stock-transactions__grid-cell'>
        <span class='stock-transactions__grid-text'>{transaction.amount}</span>
      </div>
      <div class='stock-transactions__grid-cell'>
        <span class='stock-transactions__grid-text'>{transaction.side}</span>
      </div>
      {/* buy button implementation
      <div class='stock-transactions__grid-cell'>
        <span class='stock-transactions__grid-text stock-transactions__grid-cell-buy'>
          buy button
        </span>
      </div>
      */}
      <div class='stock-transactions__grid-cell'>
        <span class='stock-transactions__grid-text'>
          {Number(transaction.tickPrice).toFixed(2)}
        </span>
      </div>
      <div class='stock-transactions__grid-cell'>
        <span class='stock-transactions__grid-text'>{(transaction.tickPrice * transaction.amount).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TransactionRow;
