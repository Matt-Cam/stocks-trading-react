import React from 'react';
import StockRow from './StockRow';
import Modal from './Modal';
import AddFollow from './AddFollow';
import {
  getWatchlist,
  getAllocations,
  getMergedWatchListAllocations
} from '../redux/selectors';
import { removeFromWatchlist } from '../redux/actions';
import { connect } from 'react-redux';
import StocksDataWrapper from '../data/StocksDataWrapper';
import { fetchWatchlist } from '../redux/actions';
import { fetchAllocationsBegin } from '../redux/actions';

class Watchlist extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  /*replacing this with a selector to gather a merged WatchList with Allocation List*/

  /*mergeWatchlistWithAllocations = wl => {
    wl.map(x => {
      console.log('mergeWatchlistWithAllocations called from Watchlist');
    });
  };
*/
  toggleModal = ev => {
    ev.stopPropagation();
    this.setState(state => {
      return { isModalVisible: !state.isModalVisible };
    });
  };

  componentDidMount() {
    this.props.fetchWatchlist();
    this.props.getAllocations();
  }
  render() {
    return (
      <section className='stock-list'>
        <h2 className='stock-list__title'>
          Stocks that I follow
          <a href='#' onClick={this.toggleModal}>
            <span className='stock-list__btn stock-list__btn--add'>+</span>
          </a>
        </h2>

        <Modal
          closeCallback={this.toggleModal}
          isVisible={this.state.isModalVisible}
        >
          <StocksDataWrapper render={stocks => <AddFollow stocks={stocks} />} />
        </Modal>

        <div className='stock-list__grid'>
          {this.props.mergedList &&
            this.props.mergedList.map(stock => {
              const { symbol, amount } = stock;
              return (
                <React.Fragment>
                  <StockRow
                    symbol={symbol}
                    amount={amount}
                    onDelete={this.props.removeFromWatchlist}
                    key={symbol}
                  />
                </React.Fragment>
              );
            })}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    //watchlist: getWatchlist(state)
    //allocations: getAllocations(state),
    mergedList: getMergedWatchListAllocations(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromWatchlist: symbol => dispatch(removeFromWatchlist(symbol)),
    fetchWatchlist: () => dispatch(fetchWatchlist()),
    getAllocations: () => dispatch(fetchAllocationsBegin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);
