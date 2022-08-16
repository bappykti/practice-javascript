// Problem - 1. convert radian to degree ?
// solution - 1. 

function radianToDegree(radian){
    if(typeof radian !== "number"){
        return "Please enter valid character !";
    }
    return radian * (180/Math.PI);
    // Math.PI indicate the value of pi which is approximately 3.14159
}
// put your desire valid number below as parameter, as for example radianToDegree(10)

const convertedNumber = radianToDegree(1); 
console.log(convertedNumber);

// you will get output on terminal and the output is 57.29577951308232


// Problem - 2. check whether the given file is a javaScript file or not ?
// Solution - 2.

function isJavaScriptFile(filename){
    if(typeof filename === 'number'){
        return 'Please enter a file name with extension';
    }
    else if(filename.includes('.js')){
        return true;
    }
    return false;
}

//put your complete filename with dot '.' and extension 'js/pdf/png/jpg', as for example isJavaScriptFile('kabinnama.pdf')

const myFile = isJavaScriptFile('mamabarirabdar.js');
console.log(myFile);

// you will get output on terminal as boolean type and the output is true


// Problem - 3. calculate the total oil price that I have to pay ?
// Solution -3.

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    const dieselPricePerUnit = 114;
    const petrolPricePerUnit = 130;
    const octanePricePerUnit = 135;
    if(typeof(dieselQuantity, petrolQuantity, octaneQuantity) !== "number"){
        return "Please enter a valid number !";
    }else{
        const totalPrice = (dieselQuantity * dieselPricePerUnit) + (petrolQuantity * petrolPricePerUnit) + (octaneQuantity * octanePricePerUnit);
        return totalPrice;
    }
}

// put three valid oil quantity number below as parameter, as for example oilPrice(10, 5, 17)

const myOilRequirements = oilPrice(1, 1, 1);
console.log(myOilRequirements);

// you will get output on terminal as numbers, by default it is 379 


// Problem - 4. Find out public bus fare with single parameter ?
// Solution - 4.

function publicBusFare(people){
    const remainingPeopleUsePublicBus = people % 50;
    const publicBusFareForOnePerson = 250;
    if(typeof people !== "number"){
        return ("Please enter the valid number of people.");
    }
    else if(remainingPeopleUsePublicBus < 11){
        return remainingPeopleUsePublicBus * publicBusFareForOnePerson;
    }
    else if(remainingPeopleUsePublicBus >= 11){
        const totalRemainingPeopleUsePublicBus = remainingPeopleUsePublicBus % 11;
        return totalRemainingPeopleUsePublicBus * publicBusFareForOnePerson;
    }
}

// put a valid passenger number below as a parameter, as for example publicBusFare(129)

const totalPublicBusFare = publicBusFare(512);
console.log(totalPublicBusFare);

// you will get output on terminal as numbers, by default it is 250


// Problem - 5. best friend finder ?
// Solution 5.

function bestFriend(person1, person2){
    if(typeof person1 !== "object" || typeof person2 !== "object"){ 
        return 'Please provide an object.';
    }
    else if((person1.name.toLowerCase() === person2.friend.toLowerCase()) && (person1.friend.toLowerCase() === person2.name.toLowerCase())){
        return true;
    }
    return false;
}
// input parameters are as an object

const person1 = {name: 'TOm', friend: 'roCK'};
const person2 = {name: 'Rock', friend: 'toM'};

const myFriend = bestFriend(person1, person2);
console.log(myFriend);

// you will get output on terminal as boolean value and the output is true
