import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>Details About the Person you Clicked on Username</h1>
            <h2>Name :- {friend.name}</h2>
            <h3>Contact Number:- {friend.phone}</h3>
            <h4>User Name :- {friend.username}</h4>
            <h2>Everything you need to know about the person</h2>
        </div>
    );
};

export default FriendDetails;