// console.log('hello js');

function caseQuantityUpdate(isIncrease){
    const previousCaseElement = document.getElementById('case-quantity-field');
    const previousCaseQuantityString = previousCaseElement.value;
    const previousCaseQuantity = parseInt(previousCaseQuantityString);
    let newCaseQuantity;
    if(isIncrease === true){
        newCaseQuantity = previousCaseQuantity + 1;
    } else{
        newCaseQuantity = previousCaseQuantity - 1;
    }
    previousCaseElement.value = newCaseQuantity;
    return newCaseQuantity;
}
function casePriceUpdate(){
    
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    // console.log('hello bhai plus');
    const newCaseQuantity = caseQuantityUpdate(true);

    const caseTotalPrice = newCaseQuantity * 59;
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = caseTotalPrice;
    
    /*
    const previousCaseElement = document.getElementById('case-quantity-field');
    const previousCaseQuantityString = previousCaseElement.value;
    const previousCaseQuantity = parseInt(previousCaseQuantityString);
    const newCaseQuantity = previousCaseQuantity + 1;
    previousCaseElement.value = newCaseQuantity;
    */
    // console.log(newCaseQuantity);
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseQuantity = caseQuantityUpdate(false);
})