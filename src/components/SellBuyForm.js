import React from 'react';
import { connect } from 'react-redux';

const SellBuyForm = (props) => {
    if (props.type === 'buy') {
        return (
            <React.Fragment>
             <h2 class="modal__h2">Buy stock</h2>
            <select class="modal__dropdown">
                <option value="AMZN">Amazon</option>
                <option value="DSNY">Disney</option>
                <option value="HULU">Hulu</option>
                <option value="NTFLX">Netflix</option>
            </select>
    
            <input class="modal__number-box" type="number" name="quantity" placeholder="enter amount" />
    
            <button class="modal__btn">Buy</button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
            <h2 class="modal__h2">Sell stock</h2>
            <select class="modal__dropdown">
                <option value="AMZN">Amazon</option>
                <option value="DSNY">Disney</option>
                <option value="HULU">Hulu</option>
                <option value="NTFLX">Netflix</option>
            </select>

            <input class="modal__number-box" type="number" name="quantity" placeholder="enter amount" />

            <button class="modal__btn">Sell</button>
            </React.Fragment>
        )    
    }
    
};

export default connect(
    null,
    null
  )(SellBuyForm);