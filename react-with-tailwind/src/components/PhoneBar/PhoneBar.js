import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhone] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => console.log(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            const phoneData = phonesLoaded.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const singlePhone = {
                    name : phone.phone_name,
                    price: price
                }
                return singlePhone;
            })
            console.log(phoneData);
            setPhone(phoneData);
        });

    },[])
    return (
        <div>
            <BarChart width={700} height={300} data={phones}>
                <Bar type="monotone" dataKey="price" stroke="#82ca9d"/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default PhoneBar;