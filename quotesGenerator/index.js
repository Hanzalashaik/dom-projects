//variable

let btn = document.querySelector(".new-quotes");
let quote = document.querySelector(".quotes");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `“If you are three, two amongst you should not converse secretly between yourselves to the exclusion of the other (third one), until some other people join him (and dispel his loneliness), for it may hurt his feelings.”`,
    person: "Prophet Muhammad (PBUH)",
  },
  {
    quote: `““Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more brightly.”`,
    person: "Ali Ibn Abi Talib AS",
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person: "Albert Einstein",
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    person: "Mahatma Gandhi",
  },
  {
    quote: `“A good man treats women with honour.”`,
    person: "Prophet Muhammad (PBUH)",
  },
  {
    quote: `“Patience ensures victory.”`,
    person: "Hazrat Ali Ibn Abu-Talib A.S",
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    person: "Mark Twain",
  },
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})