import React from 'react';
import Personal from '../Personal/Personal';
import './Cart.css';
const Cart = (props) => {
    const{cart} = props;
    let total = 0;
    for(const information of cart ){
        total = total + parseFloat(information.time);
    }
    return (
        <div className='cart'>
            <Personal></Personal>
            <h3>Daily Activities Details</h3>
            <p>Number of Activities :- {cart.length}</p>
            <p>Reading Time :- {total} minutes</p>
        </div>
    );
};

export default Cart;