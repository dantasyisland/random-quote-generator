/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
// An empty array to hold quotes

let quotes = [];

//MAKE TAGS ARRAYS
// Using the .push() method to add quote objects that contain quotes and a source. Some contain citations, the year of the quote as well as a tags property to keep things categorized. 

quotes.push(
  {quote:"Music is a higher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.",source:"Ludwig van Beethoven",tags:["music"]},
  {quote:"Creativity is just connecting things.",source:"Steve Jobs",tags:["creativity","technology"]},
  {quote:"Boos don’t block dunks.",source:"Kobe Bryant",tags:["mental toughness"]},
  {quote:"My expectations were reduced to zero when I was 21. Everything since then has been a bonus.",source:"Stephen W. Hawking",year:"2004",tags:["mental toughness"]},
  {quote:"The thing that becomes true about you is the thing you think the most often.",source:"Kenny Werner", citation:"Effortless Mastery",year:"1996",tags:["music","mental toughness"]},
  {quote:"Klaatu...Barada...Nnn **coughs** Okay then...that\'s it",source:"Ashley Joanna \"Ash\" Williams", year:"1300 A.D.",tags:["apocalyptic blunders"]}
);



// ***********************************

/***
 * `getRandomQuote` function
 ***/

// This function will generate a random number between 0 and the last index value of the array then pass that value as an index to the quotes array.
// The function will then return a random quote object. 
function getRandomQuote() {
  let randomNumber = (Math.floor(Math.random() * quotes.length));
  
  return quotes[randomNumber];
};


/***
 * `printQuote` function
 ***/


// <div id="quote-box" class="quote-box">
// <p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
// <p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>

// Calls randomquote
// Build a string of HTML and Quote Properties
// Then display in browser


//For loop for tags - more than one

function printQuote() {
  
  
  let randomQuote = getRandomQuote();
  let quoteHTML = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  
  if(randomQuote.citation) {
    quoteHTML += `<span class="citation">${randomQuote.citation}</span>`;
  } 
  
  if(randomQuote.year) {
    quoteHTML += `<span class="year">${randomQuote.year}</span>`;
  }
  if(randomQuote.tag) {
    
  }
  
  if(randomQuote.tags) {
    quoteHTML += `<span> , tags:</span>`
    for(let i = 0; i < randomQuote.tags.length; i++) {
      quoteHTML += `<span class="tags"> ${randomQuote.tags[i]} </span>`;  
    }
    
  }
  
  quoteHTML +=`</p>`;
  document.getElementById("quote-box").innerHTML = quoteHTML; 
  
  
  //explain
  
  //DISCUSS
  body.style.backgroundColor = randomRGB();
  // Sets Interval to print a new Quote if not pushed in 10sec
  return quoteHTML;
  
}

setInterval(printQuote,2000);
// clearInterval(printQuote);
// EXTRA CREDIT

// RANDOM BACKGROUND COLORS

let randomColorValue = () => Math.floor(Math.random() * 256);

function randomRGB() {
  const color = `rgb( ${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
  return color;
}

let body = document.querySelector('body');

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);