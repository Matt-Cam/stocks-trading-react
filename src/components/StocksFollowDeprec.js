import React from 'react';
import StockRow from './StockRow';
import Modal from './Modal';
import AddFollow from './AddFollow';

export default class StocksFollow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  toggleModal = ev => {
    ev.stopPropagation();
    this.setState(state => {
      return { isModalVisible: !state.isModalVisible };
    });
  };

  render() {
    return (
      <section class='stock-list'>
        <h2 class='stock-list__title'>
          Stocks that I follow
          <a href='#' onClick={this.toggleModal}>
            <span class='stock-list__btn stock-list__btn--add'>+</span>
          </a>
        </h2>

        <Modal
          closeCallback={this.toggleModal}
          isVisible={this.state.isModalVisible}
        >
    
        </Modal>

        <div class='stock-list__grid'>
          {this.props.stocks.map(stock => {
            const { name, amount, price } = stock;
            return (
              <StockRow symbol={name} amount={amount} price={price} key={name} />
            );
          })}
        </div>
      </section>
    );
  }
}

StocksFollow.defaultProps = {
  stocks: [
    {
      name: 'AAP',
      price: 5,
      amount: 5
    },
    {
      name: 'GOOG',
      price: 5,
      amount: 0
    }
  ]
};
