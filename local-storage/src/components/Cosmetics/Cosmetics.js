import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../Utilities/calculate';

const Cosmetics = () => {
    // const first = 50;
    // const second = 60;
    // const result = add(first, second);
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('fakeDb.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    return (
        <div>
            <h3>This is Cosmetics Section</h3>
            {/* <p>Price of Cosmetics :- {result}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic
                key={cosmetic.id}
                cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;