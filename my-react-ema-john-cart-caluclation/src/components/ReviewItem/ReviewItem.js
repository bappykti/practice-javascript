import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handleReviewItem}) => {
    const {id, name, price, quantity, shipping, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p>Price : $ {price}</p>
                    <p>Shipping : $ {shipping}</p>
                    <p>Quantity : {quantity}</p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleReviewItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;