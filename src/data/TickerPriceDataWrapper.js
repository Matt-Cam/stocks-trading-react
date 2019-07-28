import React from 'react';
import { getTickerPrices } from '../redux/selectors';
import { fetchTickerPrice } from '../redux/actions';

class TickerPriceDataWrapper extends React.component {
  constructor(props) {
    super(props);
  }
  render() {
    //return this.props.render(this.props.tickerPrices);
    console.log('TickerPriceDataWrapper data:');
    console.log(this.props.tickerPrices);
    return <div>hello</div>;
  }
  componentDidMount() {
    fetchTickerPrice(this.props.symbol);
  }
}

const mapStateToProps = state => {
  return {
    tickerPrices: getTickerPrices(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTickerPrice: symbol => dispatch(fetchTickerPrice(symbol))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TickerPriceDataWrapper);
