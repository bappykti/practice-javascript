import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const
     {id, name, address, company, email, phone, username, website} = friend;

    return (
        <div className='friend'>
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
            <p>City: {address.city}</p>
            <p>Street: {address.street}</p>
            <p>Suite: {address.suite}</p>
            <p>ZipCode : {address.zipcode}</p>
            <p>Phone : {phone}</p>
            <p>Username : <Link to={`/friend/${id}`}>{username}</Link> </p>
        </div>
    );
};

export default Friend;