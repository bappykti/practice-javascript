console.log('i am pin js hello-----');
function getPin(){
    const pin = generatePin();
    const pinString = pin + "";
    if(pinString.length === 4) {
        return pin;
    }else{
        // console.log("Pin not found with 4 digits", pin);
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    console.log(pin);
    // show pin
    const showPinField = document.getElementById('show-pin');
    showPinField.value = pin;
})