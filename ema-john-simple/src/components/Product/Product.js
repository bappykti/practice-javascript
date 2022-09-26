import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {category, name, img, seller, price, ratings} = props.product;
    const {handleAddToCart, product} = props;
    return (
        <div className='product'>
             <img src={img} alt="" />     
             <div className='product-info'>
                <h5>{name}</h5>    
                <p>{category}</p>    
                <p>Brand :- {seller}</p>    
                <p>Price :- ${price}</p>    
                <p>Customers Ratings : "{ratings}"</p>    
             </div>
             <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
               <p> Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
             </button>
        </div>
    );
};

export default Product;