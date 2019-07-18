import React, { useContext } from 'react';
import HighchartsWrapper from './HighchartsWrapper';
import StockPriceDataWrapper from '../data/StockPriceDataWrapper';
import { StockContext } from '../pages/Home';

const StocksGraph = (props) => {
    const [selectedStock, setSelected] = useContext(StockContext);
    const { symbol } = props;

    return (
        <section className="stock-graph">
            { symbol }
            { setSelected(5) }

            <StockPriceDataWrapper
                symbol={symbol}
                render={data => (
                    <HighchartsWrapper data={data} />
                )}
            />
        </section>
    );
}

StocksGraph.defaultProps = {
    stockSymbol: null
};

export default StocksGraph;