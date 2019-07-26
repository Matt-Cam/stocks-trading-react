import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeTransaction } from '../redux/actions';

const SellBuyForm = props => {
  const [selected, setSelected] = useState();
  const [amount, setAmount] = useState();

  if (props.type === 'buy') {
    return (
      <React.Fragment>
        <h2 class='modal__h2'>Buy stock</h2>
        <select
          class='modal__dropdown'
          onChange={ev => setSelected(ev.target.value)}
        >
          <option value='AMZN'>f</option>
          <option value='DSNY'>Disney</option>
          <option value='HULU'>Hulu</option>
          <option value='NTFLX'>Netflix</option>
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
          <option value='AMZN'>Amazon</option>
          <option value='DSNY'>Disney</option>
          <option value='HULU'>Hulu</option>
          <option value='NTFLX'>Netflix</option>
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
