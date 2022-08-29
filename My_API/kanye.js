// console.log("Hello kanye uncle");

const url = 'https://api.kanye.rest';
const loadQuotes = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => displayQuote(data))
}
// loadQuotes();
const displayQuote = (quote) => {
    const blockQuote = document.getElementById('quote');
        console.log(quote);
    blockQuote.innerText = quote.quote;

}