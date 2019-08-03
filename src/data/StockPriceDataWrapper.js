import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const StockPriceDataWrapper = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    {
      setData(dataMock);
    }
  });

  return (
    <section>
      <div>{props.symbol}</div>
      {props.render(data)}
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
    //increment: () => dispatch()
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    //tickerPrice: getTickerPrice(state, ownProps.symbol)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StockPriceDataWrapper);
