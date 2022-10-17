const express = require('express');
const app = express();
const phones = require('./phones.json')
const port = 5000;

app.get('/', (req, res)=> {
    res.send('look mama again !! iPhone Hunter Server!!!');
});

app.get('/phones', (req ,res) =>{
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log("Looking for id:", id);
    console.log(typeof id);

    const phone = phones.find(ph => ph.id === id) || {};
    console.log(typeof phone.id)
    console.log(phone);
    res.send(phone);
})


app.listen(port, ()=> {
    console.log(`iphone server is running on port ${port}`);
});