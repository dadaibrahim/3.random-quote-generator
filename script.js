const quoteText=document.querySelector('.quote');
const quoteAuthor=document.querySelector('.author');
const newQuoteBtn=document.querySelector('#new-quote');

async function fetchQuote() {
    try {
        const response = await fetch('http://api.quotable.io/random');
        const data= await response.json();
        quoteText.textContent=`"${data.content}"`;
        quoteAuthor.textContent=`- ${data.author}`;
    } catch (error) {
        quoteText.textContent="Oops, something went wrong!";
        quoteAuthor.textContent="";
    }
}

newQuoteBtn.addEventListener('click', fetchQuote);