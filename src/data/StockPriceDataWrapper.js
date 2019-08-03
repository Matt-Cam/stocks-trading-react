import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHistoricPrices } from '../redux/actions';
import { getHistoricPrices } from '../redux/selectors';

const StockPriceDataWrapper = props => {
  //const [data, setData] = useState([]);
  const { error, loading, prices } = props.priceData;
  useEffect(() => {
    {
      props.fetchHistoricPrices(props.symbol, 'today');
    }
  }, props.symbol);
  //or maybe pass [] instead of props.symbol if this doesn't work

  //if the prices are loading, print loading, otherwise render prop
  return (
    <section>
      <div>{props.symbol}</div>
      {loading ? 'Loading...' : props.render(prices)}
    </section>
  );
};

const dataMock = [
  {
    name: 'aggregated',
    data: [
      {
        x: new Date('2019-03-20T00:05:00.000Z'),
        y: 20
      },
      {
        x: new Date('2019-03-23T00:05:00.000Z'),
        y: 5
      },
      {
        x: new Date('2019-03-29T00:05:00.000Z'),
        y: 5
      }
    ]
  },
  {
    name: 'detailed',
    data: [
      {
        x: new Date('2019-03-24T00:05:00.000Z'),
        y: 24
      },
      {
        x: new Date('2019-03-25T00:05:00.000Z'),
        y: 55
      },
      {
        x: new Date('2019-03-26T00:05:00.000Z'),
        y: 500
      }
    ]
  }
];

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
