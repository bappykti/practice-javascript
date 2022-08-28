/*
const user = {id: 1, name: "kazi tanvirul islam", job: "web developer"};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
 // { id: 1, name: 'kazi tanvirul islam', job: 'web developer' }
console.log(stringified); 
//{"id":1,"name":"kazi tanvirul islam","job":"web developer"}
*/

const shop = {
    name: "Kazi Tanvirul ISlam",
    address: {
        street : "123/a avu rolla area",
        city: "california",
        counntry: 'USA'
    },
    products : ['laptop', 'mouse', 'monitor', 'keyboard'],
    revenue : 4500,
    isOpen : true,
    inNew: false
};
// convert object into an array using JSON stringify
const shopString = JSON.stringify(shop);
// convert a stringified array into a object
const shopObject = JSON.parse(shopString);
// normal object to be printed
console.log(shop);
console.log(shopString);
console.log(shopObject);
