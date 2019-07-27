import React from 'react';

import { connect } from 'react-redux';
import { getTransactions } from '../redux/selectors';
import { fetchTransactions } from '../redux/actions';

class TransactionsDataWrapper extends React.Component {
  render() {
    if (this.props.transactions.length) {
      return this.props.render(this.props.transactions);
    } else {
      return <div>Loading...</div>;
    }
  }

  componentDidMount() {
    this.props.fetchTransactions();
  }
}

const mapStateToProps = state => {
  return {
    transactions: getTransactions(state).slice(0, 10)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions())
  };
};

TransactionsDataWrapper.defaultProps = {
  transactions: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsDataWrapper);
