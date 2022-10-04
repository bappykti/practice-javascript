import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../Utilities/localFakeDb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    const removeFromCart = (id) => {
        // console.log("Removing", id);
        removeFromDb(id);
    }
    const deleteFullCart =() => {
        deleteShoppingCart();
    }
    // rapping the event handler
    // const addToCartWithParams = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Product Name :- {name}</h2>
            <h4>Product Price :- $ {price}</h4>
            <p>Customer ID :- {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={() => deleteFullCart()}>Delete Cart</button>
            {/* <button onClick={addToCartWithParams}>Add to Cart</button> */}
        </div>
    );
};

export default Cosmetic;