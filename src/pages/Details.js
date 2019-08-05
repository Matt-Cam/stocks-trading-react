import React, { useState } from 'react';
import StockPriceDataWrapper from '../data/StockPriceDataWrapper';
import HighchartsWrapper from '../components/HighchartsWrapper';

const Details = props => {
  const [period, setPeriod] = useState('today');
  const selectedStock = props.match.params.stock;
  return (
    <React.Fragment>
      <div>Details for {selectedStock}</div>
      <select value={period} onChange={e => setPeriod(e.target.value)}>
        <option value='today'>today</option>
        <option value='yearly'>yearly</option>
      </select>
      <StockPriceDataWrapper
        symbol={selectedStock}
        period={period}
        render={data => (
          <HighchartsWrapper symbol={selectedStock} data={data} />
        )}
      />
    </React.Fragment>
  );
};

export default Details;
