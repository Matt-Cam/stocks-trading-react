import React from 'react';
import Modal from './Modal';
import SellBuyForm from './SellBuyForm';

export default class StockRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  toggleModal = type => {
    this.setState(state => {
      return {
        isModalVisible: !state.isModalVisible,
        type: type
      };
    });
  };

  render() {
    return (
      <div class='stock-list__grid-row' onClick={() => alert('row clicked')}>
        <Modal
          isVisible={this.state.isModalVisible}
          closeCallback={this.toggleModal}
        >
          <SellBuyForm type={this.state.type} />
        </Modal>

        {this.props.onDelete && (
          <div class='stock-list__grid-cell'>
            <a onClick={() => this.props.onDelete(this.props.symbol)}>
              <span class='stock-list__btn stock-list__btn--remove'>
                &ndash;
              </span>
            </a>
          </div>
        )}
        <div class='stock-list__grid-cell'>{this.props.symbol}</div>
        <div class='stock-list__grid-cell'>{this.props.price}</div>
        <div class='stock-list__grid-cell'>
          <a onClick={() => this.toggleModal('buy')}>
            <span class='btn-transaction btn-transaction--buy'>buy</span>
          </a>
        </div>
        {this.props.amount && (
          <React.Fragment>
            <div class='stock-list__grid-cell'>
              <a onClick={() => this.toggleModal('sell')}>
                <span class='btn-transaction btn-transaction--sell'>sell</span>
              </a>
            </div>
            <div class='stock-list__grid-cell'>35</div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
