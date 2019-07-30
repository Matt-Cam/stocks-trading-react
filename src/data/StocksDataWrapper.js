import React from 'react';
import StocksFetcher from './StocksFetcher';

import { connect } from 'react-redux';
import { getStocks } from '../redux/selectors';
import { fetchStocksIfNecessary } from '../redux/actions';

class StocksDataWrapper extends React.Component {
  render() {
    if (this.props.stocks.length) {
      return this.props.render(this.props.stocks);
    } else {
      return <div>Loading...</div>;
    }
  }

  componentDidMount() {
    this.props.fetchStocksIfNecessary();
  }
}

const mapStateToProps = state => {
  return {
    stocks: getStocks(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStocksIfNecessary: () => dispatch(fetchStocksIfNecessary())
  };
};

StocksDataWrapper.defaultProps = {
  stocks: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksDataWrapper);
