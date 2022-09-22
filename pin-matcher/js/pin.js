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
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberFirld = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberFirld.value;
    // console.log(number);
    if(isNaN(number)){
        if(number === "C"){
            typedNumberFirld.value = "";
        }else if(number === "<"){
            // console.log(previousTypedNumber);
            const digits = previousTypedNumber.split("");
            digits.pop();
            const remainingDigits = digits.join("");
            typedNumberFirld.value = remainingDigits;
        }
    }else{
        // const typedNumberFirld = document.getElementById('typed-number');
        // const previousTypedNumber = typedNumberFirld.value;
        const newTypedNumber = previousTypedNumber + number; 
        typedNumberFirld.value = newTypedNumber;
    }
})
document.getElementById('verify-pin').addEventListener('click', function(){
    const showPinField = document.getElementById('show-pin');
    const currentPin = showPinField.value;
    const typedNumberFirld = document.getElementById('typed-number');
    const typedNumber = typedNumberFirld.value;
    if(typedNumber === currentPin){
        console.log("correct pin");
    }else{
        console.log("incorrect pin");
    }

})