const numbers = [12,25,24,45,77,48,56,236,9,66,96];
for(const number of numbers){
    console.log(number);
}

const products = [ 
    {id:1, name: "iPhone air is here", price: 150000},
    {id:2, name: "samsung is the most user friendly phone", price: 50000},
    {id:3, name: "Nokia is out of market", price: 5000},
    {id:4, name: "htc is the unique", price: 65000},
    {id:5, name: "xiome is the latest phone", price: 56000},
    {id:6, name: "walton is the average phone", price: 12000},
    {id:7, name: "realme is good", price: 16000},
    {id:8, name: "nothing phone is ultra modern", price: 80000},
    {id:9, name: "vivo is good", price: 36000},
    {id:10, name: "oppo is selfie master", price: 29000},
    {id:11, name: "asus is good looking", price: 320000},
    {id:12, name: "infiex is big Phone", price: 1000},
]

function productSearch(products, search){
    const searchResult = [];
    for(const product of products){
        // console.log(product.name);
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            searchResult.push(product);
        }
    }
    return searchResult;
}
const mySearch = productSearch(products, 'ViVo');
console.log(mySearch);


