import React, { useContext } from 'react';
import HighchartsWrapper from './HighchartsWrapper';
import StockPriceDataWrapper from '../data/StockPriceDataWrapper';
import { StockContext } from '../pages/Home';

const StocksGraph = props => {
  const [selectedStock, setSelected] = useContext(StockContext);
  const { symbol } = selectedStock;

  return (
    <section className='stock-graph'>
      {selectedStock}

      <StockPriceDataWrapper
        symbol={selectedStock}
        render={data => <HighchartsWrapper data={data} />}
      />
    </section>
  );
};

StocksGraph.defaultProps = {
  stockSymbol: null
};

export default StocksGraph;
