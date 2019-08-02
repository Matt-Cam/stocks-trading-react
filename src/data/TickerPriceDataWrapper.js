import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTickerPrice } from '../redux/selectors';
import { tickerSubscription } from '../redux/actions';

const TickerPriceDataWrapper = props => {
  useEffect(() => {
    props.tickerSubscription(props.symbol);
  });
  return <div>{loadingOrPrice(props.tickerPrice)}</div>;
};
//if the obj is undefined, return 'loading', else return obj.price
const loadingOrPrice = obj => {
  if (obj) return obj.price.toFixed(2);
  else return 'loading';
};
const mapStateToProps = (state, ownProps) => {
  return {
    tickerPrice: getTickerPrice(state, ownProps.symbol)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tickerSubscription: symbol => dispatch(tickerSubscription(symbol))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TickerPriceDataWrapper);
