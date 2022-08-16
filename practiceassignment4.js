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
const convertedNumber = radianToDegree(2.5); 
console.log(convertedNumber);
// you will get output on terminal and the output is 57.29577951308232

/*
// program to get the file extension

function getFileExtension(filename){
    // get file extension
    const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
    return extension;
}

const result1 = getFileExtension('module.js');
console.log(result1);

const result2 = getFileExtension('test.txt');
console.log(result2);

*/
/*
// program to get the file extension

function getFileExtension(filename){

    // get file extension
    const extension = filename.split('.').pop();
    return extension;
}

const filename = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including. versions of Lorem Ipsum"
console.log(getFileExtension(filename));
*/

// // passing the filename
// const result1 = getFileExtension('module.js');
// console.log(result1);

// const result2 = getFileExtension('module.txt');
// console.log(result2);


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

// you will get output on terminal as boolean and the output is true


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


// Problem - 4. public bus fare for single parameter ?
// Solution - 4.

function publicBusFare(people){
    const remainingPeopleUsePublicBus = people % 50;
    if(typeof people !== "number"){
        return ("Please enter the valid number of people.");
    }
    else if(remainingPeopleUsePublicBus < 11){
        return remainingPeopleUsePublicBus * 250;
    }
    else if(remainingPeopleUsePublicBus >= 11){
        const totalRemainingPeopleUsePublicBus = remainingPeopleUsePublicBus % 11;
        return totalRemainingPeopleUsePublicBus * 250;
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
const person1 = {name: 'TOm', friend: 'roCK'};
const person2 = {name: 'Rock', friend: 'toM'};

// you will get output on terminal as boolean and the output is true

const myFriend = bestFriend(person1, person2);
console.log(myFriend);