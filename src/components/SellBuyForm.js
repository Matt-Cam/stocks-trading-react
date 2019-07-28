import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeTransaction } from '../redux/actions';
import StocksDataWrapper from '../data/StocksDataWrapper';

//this is used to determine if stock in dropdown is the one to set as selected on initial pop up
const setSelectPropOnSelected = (stock, selected) => {
  return stock === selected ? 'selected' : '';
};

const SellBuyForm = props => {
  const [selected, setSelected] = useState(props.stock);
  const [amount, setAmount] = useState();

  if (props.type === 'buy') {
    return (
      <React.Fragment>
        <h2 class='modal__h2'>Buy stock</h2>
        <select
          class='modal__dropdown'
          onChange={ev => setSelected(ev.target.value)}
        >
          <StocksDataWrapper
            render={stocks => {
              return stocks.map(stock => {
                return (
                  <option
                    value={stock.symbol}
                    key={stock.symbol}
                    selected={setSelectPropOnSelected(stock.symbol, selected)}
                  >
                    {stock.symbol}
                  </option>
                );
              });
            }}
          />
        </select>

        <input
          class='modal__number-box'
          type='number'
          name='quantity'
          placeholder='enter amount'
          onChange={ev => setAmount(ev.target.value)}
        />

        <button
          class='modal__btn'
          onClick={() => props.makeTransaction(selected, 'BUY', amount)}
        >
          Buy
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h2 class='modal__h2'>Sell stock</h2>
        <select
          class='modal__dropdown'
          onChange={ev => setSelected(ev.target.value)}
        >
          <StocksDataWrapper
            render={stocks => {
              return stocks.map(stock => {
                return <option key={stocks.symbol}>{stock.symbol}</option>;
              });
            }}
          />
        </select>

        <input
          class='modal__number-box'
          type='number'
          name='quantity'
          placeholder='enter amount'
          onChange={ev => setAmount(ev.target.value)}
        />

        <button
          class='modal__btn'
          onClick={() => props.makeTransaction(selected, 'SELL', amount)}
        >
          Sell
        </button>
      </React.Fragment>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    makeTransaction: (symbol, side, amount) =>
      dispatch(makeTransaction(symbol, side, amount))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SellBuyForm);
