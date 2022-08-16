// feet to inches 
let feet =  250;
let inch = 12 * feet;
console.log("Converted", feet,"feet into inches =",inch);
// centimeter to meter 
let centimeter = 1000;
let meter = centimeter / 1000;
console.log("Converted", centimeter, "centimeter into meter =", meter);
// count paper 
function paperRequirements(book1, book2, book3){
    const book1Paper = 100;
    const book2Paper = 200;
    const book3Paper = 300;
    let paperNeededBook1 = book1Paper * book1;
    let paperNeededBook2 = book2Paper * book2;
    let paperNeededBook3 = book3Paper * book3;
    let totalPaperNeeded = paperNeededBook1 + paperNeededBook2 + paperNeededBook3;
    // console.log(paperNeededBook1 + paperNeededBook2 + paperNeededBook3);
    return totalPaperNeeded;
}
let myOrderedBooksPaperRequirements = paperRequirements(10, 10, 10);
console.log("Paper needed for my ordered books is", myOrderedBooksPaperRequirements, "pieces.");

// return the highest length best friends name 
let friends = ['Ali', 'Akher', 'Abdullah', 'Humaira', 'Abul Ohab khan', 'Kazi Raihanul Islam', 'kazi Abdussalam Mokbul Bari'];

 function bestFriend(friends){
    let longNamedFriend = friends[0];
    for(let i = 0; i < friends.length; i++){
        let friend = friends[i];
        // console.log(friend);
        if(friend.length > longNamedFriend.length){
            longNamedFriend = friend;
        }
        // console.log(friend);
    }
    return longNamedFriend;
 }
 const myFriend = bestFriend(friends);
 console.log(myFriend);

 
 // running loop until it gets negative value and break
 let numbers = [12,25,14,26,96,-66,55,66,87,45,52,22];
 function onlyPositive(numbers){
    const myArray = [];
    for( let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        // console.log(number);
        if(number < 0){
            break;
        }
        myArray.push(number);
        // console.log(number);
    }
    return myArray;
 }
//  onlyPositive(numbers);
const myPositiveLoop = onlyPositive(numbers);
console.log(myPositiveLoop);


/*
 // running loop until it gets negative value and continue
 let numbers = [12,25,-14,26,96,-66,55,66,87,45,52,-22];
 function onlyPositive(numbers){
    let plus = [];
    for( let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        // console.log(number);
        if(number < 0){
            plus.push(number);
            continue;
        }
        console.log(number);
    }
    return plus;
 }
//  onlyPositive(numbers);
const myPositiveLoop = onlyPositive(numbers);
console.log(myPositiveLoop);
*/