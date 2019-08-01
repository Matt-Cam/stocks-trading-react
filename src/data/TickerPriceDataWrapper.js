import React from 'react';
import { connect } from 'react-redux';
import { getTickerPrices } from '../redux/selectors';
import { fetchTickerPrice } from '../redux/actions';
import AllocationsFetcher from './AllocationsFetcher';

class TickerPriceDataWrapper extends React.Component {
  render() {
    return (
      <div>
        {this.filteredListGetPrice(this.props.symbol, this.props.tickerPrices)}
      </div>
    );
  }

  //filter the tickerList to only the symbol for this instance
  filteredListGetPrice(symbol, list) {
    const filteredList = list.filter(stock => stock.stock === symbol);

    //this ternary is to handle condition when filtered list does not return anything
    //this can happen when due to async nature, when loading it will print 'loading'
    let price = filteredList[0] ? filteredList[0].price.toFixed(2) : 'Loading';
    return <div>{price}</div>;
  }

  componentDidMount() {
    this.props.fetchTickerPrice(this.props.symbol);
    //replace this interval with WebSocket
    /* this.interval = setInterval(() => {
      this.props.fetchTickerPrice(this.props.symbol);
    }, 5000);*/
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  clearInterv = () => {
    alert('hello');
    //clearInterval(this.interval);
  };
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
