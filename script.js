const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it."
  ];
  
  function getMotivation() {
    const quoteElement = document.getElementById("quote");
    const audio = document.getElementById("motivational-music");
  
    // Display a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
  
    // Play music
    audio.currentTime = 0;
    audio.play();
  }
  