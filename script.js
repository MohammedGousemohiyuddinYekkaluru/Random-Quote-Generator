const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
const quoteBtn = document.querySelector(".quoteBtn");

let currentQuote = 0;
let quotesData = [];

async function generateQuote() {
  if (quotesData.length === 0) {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    quotesData = data.quotes;
  }

  quotes.textContent = quotesData[currentQuote].quote;
  author.textContent = "-" + " " + quotesData[currentQuote].author;
  currentQuote++;

  if (currentQuote >= quotesData.length) currentQuote = 0;
}

generateQuote();

quoteBtn.addEventListener("click", generateQuote);
