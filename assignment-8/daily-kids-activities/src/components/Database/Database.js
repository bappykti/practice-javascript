import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';
import'./Database.css';

const Database = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const addToList = (person)=>{
        console.log(person);
        const newCart = [...cart, person];
        setCart(newCart);
    }

    return (
        <div className='site-body'>
           <div className='info-box'>
            {
                data.map(person => <Data
                    key={person.id}
                    person={person}
                    addToList={addToList}
                    ></Data>)
            }
           </div>
           <div className='side-bar'>
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Database;