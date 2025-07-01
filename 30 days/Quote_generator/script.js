const api_url = "https://quotes-api-self.vercel.app/quote"
const Quote = document.getElementById("quote")
const Author = document.getElementById("author")

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    //console.log(data);
    Quote.innerHTML = data.quote;
    Author.innerHTML = data.author;

}

getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + Quote.innerHTML + "--- by" + Author.innerHTML, "Tweet Window", "height=300, width=600");
}