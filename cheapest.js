const phones = [
    {name: "samsung", camera: 32, storage: "128gb", price: "36000", color: "silver"},
    {name: "iPhone", camera: 60, storage: "512gb", price: "96000", color: "white"},
    {name: "walton", camera: 16, storage: "64gb", price: "16000", color: "blue"},
    {name: "realme", camera: 60, storage: "128gb", price: "40000", color: "skyblue"},
    {name: "xiome", camera: 48, storage: "256gb", price: "48000", color: "yelow"},
    {name: "nothing", camera: 108, storage: "512gb", price: "80000", color: "olive"},
    {name: "oppo", camera: 72, storage: "256gb", price: "66000", color: "merun"},
    {name: "nokia", camera: 8, storage: "128gb", price: "36000", color: "black"},
    {name: "htc", camera: 32, storage: "128gb", price: "36000", color: "pink"},
    {name: "infenix", camera: 12, storage: "128gb", price: "36000", color: "silver"},
]
/*
function cheapestPhone(phones){
    let lowestPhonePrice = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone= phones[i];
        // console.log(phone);
        if(phone.price < lowestPhonePrice.price){
            lowestPhonePrice = phone;
        }
    }
    return lowestPhonePrice;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);
*/
function lessCamera(phones){
    let lowestCamera = phones[0];
    for( let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.camera < lowestCamera.camera){
            lowestCamera = phone;
        }
    } 
    return lowestCamera;
}
const mySelection = lessCamera(phones);
console.log(mySelection);