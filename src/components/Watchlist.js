import React from 'react';
import StockRow from './StockRow';
import Modal from './Modal';
import AddFollow from './AddFollow';
import { getWatchlist } from '../redux/selectors';
import { removeFromWatchlist } from '../redux/actions';
import { connect } from 'react-redux';
import StocksDataWrapper from '../data/StocksDataWrapper';

class Watchlist extends React.PureComponent  {
    constructor (props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    toggleModal = (ev) => {
        ev.stopPropagation();
        this.setState(state => {
            return { isModalVisible: !state.isModalVisible };
        })
    }

    render () {
        return (
            <section class="stock-list">
                <h2 class="stock-list__title">Stocks that I follow 
                    <a href="#" onClick={this.toggleModal}><span class="stock-list__btn stock-list__btn--add">+</span></a>
                </h2>
                
                <Modal closeCallback={this.toggleModal} isVisible={this.state.isModalVisible}>
                    <StocksDataWrapper render={stocks =>
                        <AddFollow stocks={stocks} />
                    }/>
                </Modal>

                <div class="stock-list__grid">
                    {this.props.watchlist.map(stock => {
                        const { symbol, amount, price } = stock;
                        return <StockRow
                            symbol={symbol}
                            amount={amount}
                            price={price}
                            onDelete={this.props.removeFromWatchlist}
                            key={symbol}
                        />
                    })}                 
                </div>
            </section>
        );
    }
};

const mapStateToProps = state => {
    return {
        watchlist: getWatchlist(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromWatchlist: (symbol) => dispatch(removeFromWatchlist(symbol))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);