import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToWatchlist } from '../redux/actions';

const TransactionRow = ({ transactions }) => {
  const [selected, setSelected] = useState();

  return (
    <React.Fragment>
      <h2>Select a new stock to follow</h2>
{transactions.map(transaction => (
<div>hello</div> 

))}
    </React.Fragment>
  );
};


export default connect(null, null)(TransactionRow)

