import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import { tickerSubscription } from '../redux/actions';
import { connect } from 'react-redux';
// useEffect hook can be used here

const TestShowSTRKPrice = props => {
  console.log(props);
  useEffect(() => {
    props.tickerSubscription('STRK');
  });

  return <div>price</div>;
};
const mapDispatchToProps = dispatch => {
  return {
    tickerSubscription: symbol => dispatch(tickerSubscription(symbol))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(TestShowSTRKPrice);
