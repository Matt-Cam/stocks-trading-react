import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTickerPrice } from '../redux/selectors';
import { tickerSubscription } from '../redux/actions';

const TickerPriceDataWrapper = props => {
  useEffect(() => {
    console.log('here');
    props.tickerSubscription(props.symbol);
  }, []);

  return (
    <div>{props.tickerPrice ? props.tickerPrice.toFixed(2) : 'loading...'}</div>
  );
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
