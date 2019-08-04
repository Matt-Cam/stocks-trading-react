import React, { useContext, useState } from 'react';
import HighchartsWrapper from './HighchartsWrapper';
import StockPriceDataWrapper from '../data/StockPriceDataWrapper';
import { StockContext } from '../pages/Home';

const StocksGraph = props => {
  const [selectedStock, setSelected] = useContext(StockContext);
  const { symbol } = selectedStock;
  const [period, setPeriod] = useState('today');

  return (
    <section className='stock-graph'>
      <h2 className='stock-list__title'>
        Symbol: {selectedStock} {'  '}
        Period:
        <select value={period} onChange={e => setPeriod(e.target.value)}>
          <option value='today'>today</option>
          <option value='yearly'>yearly</option>
        </select>
      </h2>

      <StockPriceDataWrapper
        symbol={selectedStock}
        period={period}
        render={data => (
          <HighchartsWrapper symbol={selectedStock} data={data} />
        )}
      />
    </section>
  );
};

StocksGraph.defaultProps = {
  stockSymbol: null
};

export default StocksGraph;
