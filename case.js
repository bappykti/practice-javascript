/*
const myName = "Kazi Tanvirul Islam";
const myWife = "Kazi Tanvirul Islam";
if(myName.toLocaleLowerCase()===myWife.toLocaleLowerCase()){
    console.log("valid input");
}
else{
    console.log("Invalid Input");
}
*/

const sentence = 'life is not good  for all the people those who are thrives for money all the time but do not have any thankfulness for what they have';

// const existing = sentence.includes('BuT');
const searchString = 'BUT';
const doesExist = sentence.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);