const users = [{id:1, name: "Bappy", job: "web-developer"}];
// console.log(users[0].name);

const data = {
    count : 5000,
    data:[
        {id:1, name : 'bappy', job:'developer'},
        {id:2, name : 'rabby', job:'banker'}
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob);

const user1 = {
    id:5001, name: "Tom Hardy",
    address:{
        street : { 
            first:"62/d Lillu Avu Lane",
            second: "Sixteenth Floor",
            third: 'Left Side'
         },
        postOffice :"Canton Bay Area",
        city: "Florida" 
    }
}
// console.log(user1.address.street.second);
// ? = optional chaining, when you are not getting the data stop
console.log(user1.address.stree?.second);