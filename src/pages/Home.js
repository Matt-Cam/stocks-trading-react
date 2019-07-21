import React, { useContext, useState } from 'react';
import StockTransactions from '../components/StocksTransactions';
import StocksGraph from '../components/StocksGraph';
import Watchlist from '../components/Watchlist';
import StocksFollow from '../components/StocksFollow';

export const StockContext = React.createContext();

const Home = () => {
  const [selectedStock, setSelected] = useState(0);

  return (
    <StockContext.Provider value={[selectedStock, setSelected]}>
      the selected stock is {selectedStock}
      <React.Fragment>
        <Watchlist />
        <StocksGraph />
        <StockTransactions />
      </React.Fragment>
    </StockContext.Provider>
  );
};

export default Home;
