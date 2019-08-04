import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchStocksIfNecessary,
  fetchAllocationsBegin
} from '../redux/actions';
import { getStocks, getAllocations } from '../redux/selectors';
import { map } from 'highcharts';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';

class AssetsDataWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.refreshedData = defaultData;
  }
  componentDidMount() {
    this.props.fetchStocksIfNecessary();
    this.props.fetchAllocationsBegin();
    console.log(this.props.stocks);
    console.log(this.props.allocations);
  }
  componentDidUpdate() {
    if (this.props.stocks.length && this.props.allocations.length) {
      console.log(
        this.mergeStocksWithAllocations(
          this.props.stocks,
          this.props.allocations
        )
      );
    }
  }
  render() {
    if (!this.props.stocks.length || !this.props.allocations.length) {
      return 'Loading...';
    } else {
      return this.props.render({
        ...defaultData,
        rowData: this.mergeStocksWithAllocations(
          this.props.stocks,
          this.props.allocations
        )
      });
    }
  }
  mergeStocksWithAllocations = (stocks, allocs) => {
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
}

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
