import React from 'react';
import './Data.css';

const Data = (props) => {
    const {addToList, person} = props;
    const {name, age, gender, time, company, email, phone, address, picture, about} = props.person;


    return (
        <div className='data-box'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{about.slice(0,80) + "..."}</p>
            <p>Time Required :- {time}</p>
            <button onClick={() => addToList(person)} className='btn-add'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Data;