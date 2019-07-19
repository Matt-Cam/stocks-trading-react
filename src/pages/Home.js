import React, { useContext, useState } from 'react';
import StockTransactions from '../components/StocksTransactions';
import StocksGraph from '../components/StocksGraph';
import Watchlist from '../components/Watchlist';

export const StockContext = React.createContext()

const Home = () => {
    const [selectedStock, setSelected] = useState(10);
    

    return (
        <StockContext.Provider value={[selectedStock, setSelected]}>
            
            <React.Fragment>
                <Watchlist />
                <StocksGraph />
                <StockTransactions />
            </React.Fragment>
        </StockContext.Provider>
    );
}

export default Home;