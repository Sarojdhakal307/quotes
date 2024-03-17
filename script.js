const quote1 = document.getElementById("Quote");
const writer = document.getElementById("Writer");
const button = document.getElementById("getQuote");


async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()
    
    // Output the quote and author name
    console.log(quote.content);
    quote1.innerText = quote.content;
    console.log(`- ${quote.author}`);
    writer.innerText = "- " + quote.author;
  }
button.addEventListener('click' , function() {


    console.log('I am clicked');
    randomQuote();
    quote1.style.display = 'block';
    writer.style.display = 'block';
});


