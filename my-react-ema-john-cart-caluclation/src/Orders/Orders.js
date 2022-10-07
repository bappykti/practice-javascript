import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const {products , previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleReviewItem = (id) => {
        console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleReviewItem={handleReviewItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && 
                    <h3>No items for Review. Please 
                        <Link to="/"> Shop More</Link></h3>
                }
            </div>
            <div className='cart-container'>
                    <Cart cart={cart} clearCart={clearCart}>
                        
                    </Cart>

            </div>
           
        </div>
    );
};

export default Orders;