import React, { useState } from 'react';
import StockTransactions from '../components/StocksTransactions';
import StocksGraph from '../components/StocksGraph';
import Watchlist from '../components/Watchlist';
export const StockContext = React.createContext();

const Home = () => {
  const [selectedStock, setSelected] = useState('STRK');

  return (
    <StockContext.Provider value={[selectedStock, setSelected]}>
      Home loaded with symbol: {selectedStock}
      <React.Fragment>
        <Watchlist />
        <StocksGraph />
        <StockTransactions />
      </React.Fragment>
    </StockContext.Provider>
  );
};

export default Home;
