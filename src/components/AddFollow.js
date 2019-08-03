import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToWatchlist } from '../redux/actions';

const AddFollow = ({ stocks, addToWatchlist }) => {
  //set the default selected stock to 'ACME'
  const [selected, setSelected] = useState('ACME');

  return (
    <React.Fragment>
      <h2>Select a new stock to follow</h2>
      <select value={selected} onChange={ev => setSelected(ev.target.value)}>
        {stocks.map(stock => (
          <option value={stock.symbol} key={stock.symbol}>
            {stock.name}
          </option>
        ))}
      </select>

      <button className='modal__btn' onClick={() => addToWatchlist(selected)}>
        Add
      </button>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToWatchlist: symbol => dispatch(addToWatchlist({ symbol }))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddFollow);
