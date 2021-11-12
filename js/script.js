/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
 * An array of quote objects that will be used as data displayed to the user
 * Each quote object has a quote and a source
 * Some quote objects contain year, citations or tags
***/

let quotes = [
  {
    quote:"Music is a higher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.",
    source:"Ludwig van Beethoven",
    tags:["music"]
  },
  {
    quote:"Creativity is just connecting things.",
    source:"Steve Jobs",
    tags:["creativity","technology"]
  },
  {
    quote:"Boos don’t block dunks.",
    source:"Kobe Bryant",
    tags:["mental toughness"]
  },
  {
    quote:"My expectations were reduced to zero when I was 21. Everything since then has been a bonus.",
    source:"Stephen W. Hawking",
    year:"2004",
    tags:["mental toughness"]
  },
  {
    quote:"The thing that becomes true about you is the thing you think the most often.",
    source:"Kenny Werner", citation:"Effortless Mastery",
    year:"1996",
    tags:["music","mental toughness"]
  },
  {
    quote:"Klaatu...Barada...Nnn **coughs** Okay then...that\'s it",source:"Ashley Joanna \"Ash\" Williams",
    year:"1300 A.D.",
    tags:["apocalyptic blunders"]
  },
]

/***
 * `getRandomNumber` function
 * A function that returns a random number that is used as an index in the `getRandomNumber` function
 ***/

function getRandomNumber() {
  return (Math.floor(Math.random() * quotes.length))
}

/***
 * `getRandomQuote` function
 * A function that calls the `getRandomNumber` function to use as an index in the quotes array
 * References the previousQuoteIndex variable in a while loop in order to prevent the same index used twice
 * Returns a quote object from the quotes array
 ***/

let previousQuoteIndex = 0

function getRandomQuote() {
  let randomIndex = getRandomNumber();

  while (randomIndex == previousQuoteIndex) {
      randomIndex = getRandomNumber();
    }

  previousQuoteIndex = randomIndex;
  return quotes[randomIndex];

};

/***
 * `randomBodyColor` function
 * Generates a randomColor via template literals for random RGB values
 * Changes the backgroundColor style property of the document's body
 ***/

function randomBodyColor() {
  const body = document.body;
  const randomRGBValue = () => Math.floor(Math.random() * 256);
  const randomColor = `rgb( ${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
  body.style.backgroundColor = randomColor;
}

/***
 * `printQuote` function
 * Calls randomQuote to get a quote object
 * Quote object then passes through a series of conditional statements to append to quoteHTML
 * Calls the randomBodyColor() function to change the background color
 * Returns a template literal called quoteHTML containing a paragraph for both the quote and source and spans for citation, year and tags
 ***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let quoteHTML = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;

  if(randomQuote.citation) {
    quoteHTML += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if(randomQuote.year) {
    quoteHTML += `<span class="year">${randomQuote.year}</span>`;
  }

  if(randomQuote.tags) {
    quoteHTML += `<span> , tags:</span>`
    for(let i = 0; i < randomQuote.tags.length; i++) {
      quoteHTML += `<span class="tags"> ${randomQuote.tags[i]} </span>`;
    }
  }

  quoteHTML +=`</p>`;
  document.getElementById("quote-box").innerHTML = quoteHTML;

  randomBodyColor();

  return quoteHTML;
}

/***
 * `setInterval` function
 *  Uses printQuote as it's callback function so the page will refresh a quote and new color every ten seconds
***/

setInterval(printQuote,10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);