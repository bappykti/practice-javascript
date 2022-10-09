import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>Buy at least one item !!!</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h3>Ama akta nao</h3>
            <p>Toma nijar jonno akta</p>
        </div>
    }
    else{
        message = <p>Thanks for buying!</p>
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Order Quantity : {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                    </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>Tin jon ka gift diba</p> : <p>kino kino</p>
            }
        </div>
    );
};

export default Cart;