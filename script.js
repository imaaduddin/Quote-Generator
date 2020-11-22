const quoteGenerator = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");



// Get Quote From API
async function getQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  // Got below API from: https://forismatic.com/en/api/
  const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    authorText.innerText = data.quoteAuthor;
    quoteText.innerText = data.quoteText;
    // console.log(data);
  } catch (error) {
    getQuote();
    // console.log("Whoops! No quote!", error);
  }
}


// On Load
getQuote();