import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const priceOptions = [
        {id: 1, name: 'Free', price : 0, features: [
            'Everything on Free',
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Very Nice Feature',
            'Faltu Feature'
        ]
    },
        {id: 2, name: 'Silver', price : 100, features: [
            'Everything on Payment',
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Very Nice Feature',
            'Faltu Feature'
        ]
    },
        {id: 3, name: 'Gold', price : 200, features: [
            'Everything on Higher Payment',
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Very Nice Feature',
            'Faltu Feature'
        ]
    },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 text-white p-8'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-4 mt-4'>
            {
                priceOptions.map(priceOption => <PriceOption
                key={priceOption.id}
                priceOption={priceOption}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;