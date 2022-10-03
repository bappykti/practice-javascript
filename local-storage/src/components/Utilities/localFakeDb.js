// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};
    // get the shopping cart
    const storedCart = localStorage.getItem("shopping-cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
        console.log(typeof storedCart);


    }
    else{
        shoppingCart = {};
    }
 // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        // console.log('Already Exist');
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else{
        // console.log("New Item");
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}
export{
    addToDb
}