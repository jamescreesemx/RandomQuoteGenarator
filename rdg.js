// FSJS - Random Quote Generator

//this is the arrya the I will hold my quote objects in

var quotes=[
  {quote:"You don't see just how fly my style is? I don't see why I need a stylist, when I shop so much I can speak Italian ", source: "Kanye West",},
  {quote:"Don\'t be into trends. Don\'t make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.", source:"Gianni Versace",},
  {quote:"One is never over-dressed or under-dressed with a Little Black Dress.",
  source:"Karl Lagerfeld"},
  {quote:"What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language.",source:"Miuccia Prada" },
  {quote:"I firmly believe that with the right footwear one can rule the world.", source:"Bette Midler",},
  {quote:"Fashion is about dressing according to what’s fashionable. Style is more about being yourself.", source:"Oscar de la Renta",},
  {quote:"Style is something each of us already has, all we need to do is find it.", source:"Diane von Furstenberg",}
];

// Create the getRandomQuuote function and name it getRandomQuote
var seeQuo=[];
function getRandomQuuote(){
  var ranQuo = Math.floor(Math.random() * quotes.length);
  var newQuo= quotes.splice(ranQuo, 1)[0];
  //*splice allows me to add and repalce a new element into the array everytime the function is looped*/
seeQuo.push(newQuo);
if (quotes.length ===0){
  quotes= seeQuo;

}
return newQuo;
}
//this function helps me target the div box on my html sheet
function print(quote){
  var seeQuote=  document.getElementById('quote-box');
  seeQuote.innerHTML = quote;
}
// the function will diplay what is written on the webpage
function printQuote(){
  var quotes= getRandomQuuote();
 message = '<p class="quote">'+ quotes.quote + '</p>';
  message += '<p class="source">'+ quotes.source;
print(message);
}

// this is essential the click button that calls the printQuote funtion and gves an ending to my loop

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
