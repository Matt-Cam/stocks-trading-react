import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchStocksIfNecessary,
  fetchAllocationsBegin
} from '../redux/actions';
import { getStocks, getAllocations } from '../redux/selectors';
const AssetsDataWrapper = props => {
  useEffect(() => {
    props.fetchStocksIfNecessary();
    props.fetchAllocationsBegin();
  }, []);

  return !props.stocks.length || !props.allocations.length
    ? 'Loading...'
    : props.render({
        ...defaultData,
        rowData: mergeStocksWithAllocations(props.stocks, props.allocations)
      });
};
const mergeStocksWithAllocations = (stocks, allocs) => {
  let arrayToReturn;
  arrayToReturn = stocks.map(stock => {
    let newObj;
    let amount = allocs.find(el => {
      return el.symbol === stock.symbol;
    });
    newObj = {
      stock: stock.symbol,
      amount: amount.amount,
      currentPrice: stock.lastTick.price,
      total: amount.amount * stock.lastTick.price
    };
    return newObj;
  });
  return arrayToReturn;
};

const defaultData = {
  columnDefs: [
    {
      headerName: 'Stock',
      field: 'stock'
    },
    {
      headerName: 'Amount',
      field: 'amount'
    },
    {
      headerName: 'Current Price',
      field: 'currentPrice'
    },
    {
      headerName: 'Total',
      field: 'total'
    },
    {
      headerName: 'Sell',
      field: 'sell'
    }
  ],
  rowData: [
    {
      stock: 'FakeAppl',
      amount: 30,
      currentPrice: 500,
      total: 15000
    }
  ]
};

const mapStateToProps = state => {
  return {
    stocks: getStocks(state),
    allocations: getAllocations(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchStocksIfNecessary: () => dispatch(fetchStocksIfNecessary()),
    fetchAllocationsBegin: () => dispatch(fetchAllocationsBegin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetsDataWrapper);
