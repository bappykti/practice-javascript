import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = (props) => {
    const {name, price, features} = props.priceOption;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-2'>
            <div>
                <p><span className='text-6xl text-white font-bold'>{price}</span>
                <span>/mon</span></p>
                <p className='text-2xl text-gray-700 my-4'>{name}</p>
            </div>
           <div>
           {
                features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
           </div>
            <button className='bg-indigo-500 w-full rounded-md py-2 text-yellow-50  mt-5'>Buy Now</button>
        </div>
    );
};

export default PriceOption;