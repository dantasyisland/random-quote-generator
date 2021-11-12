/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
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
 ***/
function getRandomNumber() {
  return (Math.floor(Math.random() * quotes.length))
}

/***
 * `getRandomNumber` function
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
 * `randomRGB` function
 ***/
function randomRGB() {
  const randomColorValue = () => Math.floor(Math.random() * 256);
  const randomColor = `rgb( ${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
  return randomColor;
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  const body = document.body;
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

  body.style.backgroundColor = randomRGB();
  return quoteHTML;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById("load-quote").addEventListener("click", printQuote, false);