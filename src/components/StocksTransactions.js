import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TransactionsDataWrapper from '../data/TransactionsDataWrapper';
import AGGridWrapper from './AGGridWrapper';

const StockTransactions = () => {
  return (
    <React.Fragment>
      <section class='stock-transactions full-width'>
        <TransactionsDataWrapper
          render={data => {
            cleanDataForAGGrid(data);
            return (
              <AGGridWrapper
                data={{ ...gridData, rowData: cleanDataForAGGrid(data) }}
              />
            );
          }}
        />
      </section>
    </React.Fragment>
  );
};
//columns should be:
//date, stock, amount, direction, price, total
const cleanDataForAGGrid = data => {
  console.log(data);
  let arrToReturn = data.map(transaction => {
    return {
      date: transaction.date,
      stock: transaction.symbol,
      amount: transaction.amount,
      price: transaction.tickPrice,
      direction: transaction.side,
      total: transaction.cost
    };
  });
  return arrToReturn;
};
let gridData = {
  columnDefs: [
    {
      headerName: 'Date',
      field: 'date'
    },
    {
      headerName: 'stock',
      field: 'stock'
    },
    {
      headerName: 'Amount',
      field: 'amount'
    },
    {
      headerName: 'Direction',
      field: 'direction'
    },
    {
      headerName: 'Price',
      field: 'price'
    },
    {
      headerName: 'Total',
      field: 'total'
    }
  ],
  rowData: []
};

export default connect(
  null,
  null
)(StockTransactions);
