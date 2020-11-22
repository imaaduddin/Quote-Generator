// Get Quote From API
async function getQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  // Got below API from: https://forismatic.com/en/api/
  const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote();
    console.log("Whoops! No quote!", error);
  }
}


// On Load
getQuote();