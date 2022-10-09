import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt, handelAddToCart}) => {
    const {picture, name, price,} = tshirt;
    return (
        <div className='t-shirt'>
            <h2>This is Single t-shirt</h2>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price : $ {price}</h4>
            <button onClick={() => handelAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;