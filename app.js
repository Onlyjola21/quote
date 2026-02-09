let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

const quotes = [
  {
    quote: `"Believe you can and you're halfway there.",`,
    author: `Theodore Roosevelt`,
  },
  {
    quote: `"If you can dream it, you can do it."`,
    author: `Walt Disney`,
  },
  {
    quote: `"Don't watch the clock; do what it does. Keep going."`,
    author: `Sam Levenson`,
  },
  {
    quote: `"Opportunities don't happen, you create them."`,
    author: `Chris Grosser`,
  },
  {
    quote: `"The only impossible journey is the one you never begin."`,
    author: `Tony Robbins`,
  },
  {
    quote: `"It always seems impossible until it's done."`,
    author: ` Nelson Mandela`,
  },
  {
    quote: `"If you're going through hell, keep going."`,
    author: `Winston Churchill`,
  },
  {
    quote: `"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
    author: `Winston Churchill`,
  },
  {
    quote: `"The secret of getting ahead is getting started."`,
    author: `Mark Twain`,
  },
  {
    quote: `"Start where you are. Use what you have. Do what you can."`,
    author: `Theodore Roosevelt`,
  },
  {
    quote: `"Don't stop when you're tired. Stop when you're done."`,
    author: ` Unknown`,
  },
  {
    quote: `"Action is the foundational key to all success."`,
    author: `Pablo Picasso`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
});
