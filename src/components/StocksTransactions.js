import React from 'react';
import TransactionRow from './TransactionRow';
import { connect } from 'react-redux';
import TransactionsDataWrapper from '../data/TransactionsDataWrapper';


const StockTransactions = () => {
  return (
    <React.Fragment>

      <section class='stock-transactions full-width'>
        <div class='stock-transactions__grid-row'>
          <div class='stock-transactions__grid-cell'>
            <span class='stock-transactions__grid-text stock-transactions__grid-text--white'>
              Transaction ID
            </span>
          </div>
          <div class='stock-transactions__grid-cell'>
            <span class='stock-transactions__grid-text stock-transactions__grid-text--white'>
              stock
            </span>
          </div>
          <div class='stock-transactions__grid-cell'>
            <span class='stock-transactions__grid-text stock-transactions__grid-text--white'>
              amount
            </span>
          </div>
          <div class='stock-transactions__grid-cell'>
            <span class='stock-transactions__grid-text stock-transactions__grid-text--white'>
              direction
            </span>
          </div>
          <div class='stock-transactions__grid-cell'>
            <span class='stock-transactions__grid-text stock-transactions__grid-text--white'>
              price
            </span>
          </div>
          <div class='stock-transactions__grid-cell'>
            <span class='stock-transactions__grid-text stock-transactions__grid-text--white'>
              total
            </span>
          </div>
        </div>
        <TransactionsDataWrapper
        render={transactions =>
          transactions.map((transaction, i) => (
            <TransactionRow transaction={transaction} index={i} />
          ))
        }
      />
      </section>
    </React.Fragment>
  );
};

export default connect(
  null,
  null
)(StockTransactions);
