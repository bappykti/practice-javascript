// normal string
/*
function reverseString(text){
    for(var i = 0; i < text.length; i++){
        const element = text[i];
        console.log(element);
    }
}
const myString = "I am good boy as far i know";
const reversed = reverseString(myString);
*/

// reverse string whit small undefined --- problem between index and length
/*
function reverseString(text){
    for(var i = text.length; i >= 0; i--){
        const element = text[i];
        console.log(element);
    }
}
const myString = "I am good boy as far i know";
const reversed = reverseString(myString);
*/

// reverse string whit small undefined --- character reversed
/*
function reverseString(text){
    let reversed = ""; //stored in reversed string;
    for(var i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
}
const myString = "I am good boy as far i know";
const reversed = reverseString(myString);
*/

// reverse string whit small undefined --- character reversed
function reverseWord(str){
    const words = str.split(' ');
    const result = [];
    console.log(words);
    for (let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    console.log(result);
    const reversed = result.join(' '); // join the words as like a sentence
    console.log(reversed);
}

const myString = "I am a good boy as far i know";
reverseWord(myString);
