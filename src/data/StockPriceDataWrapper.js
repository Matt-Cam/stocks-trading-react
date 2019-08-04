import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHistoricPrices } from '../redux/actions';
import { getHistoricPrices } from '../redux/selectors';

const StockPriceDataWrapper = props => {
  //const [data, setData] = useState([]);
  const { error, loading, prices } = props.priceData;
  useEffect(() => {
    props.fetchHistoricPrices(props.symbol, 'today');
  }, props.symbol);

  //or maybe pass [] instead of props.symbol if this doesn't work

  //if the prices are loading, print loading, otherwise render prop
  if (!loading) {
    return props.render(props.priceData);
  } else {
    return <div>loading...</div>;
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHistoricPrices: (symbol, timePeriod) =>
      dispatch(fetchHistoricPrices(symbol, timePeriod))
  };
};

const mapStateToProps = state => {
  return {
    priceData: getHistoricPrices(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPriceDataWrapper);
