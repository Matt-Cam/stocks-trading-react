import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHistoricPrices } from '../redux/actions';
import { getHistoricPrices } from '../redux/selectors';

const StockPriceDataWrapper = props => {
  const { error, loading, prices } = props.priceData;

  //rerun useEffect every time the selected symbol changes
  useEffect(() => {
    props.fetchHistoricPrices(props.symbol, props.period);
  }, [props.symbol, props.period]);

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
