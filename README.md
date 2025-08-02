# ScrAIp
ScrAIp is an JavaScript-based AI model that uses web scraping to answer user prompts.
It uses data from Wikipedia to train itself.
## ScrAIp1
Currently, the released model for ScrAIp is called ScrAIp1. It is a very basic text prediction algorithm that uses data from Wikipedia to predict the word to most likely come after the one you input.  
  
ScrAIp1 is in the main.js file in the repository. Here is an overwiew of the syntax:
```
// The algorithm is in a class, so first you have to initialize it.
var predictor = new ScrAIp1(); // Constructor takes no arguments

// After that, you have 3 methods:
scrape(wikiPageTitle) // Scrapes data from the wikipedia page you enter in.
easyScrape(limit) // Scrapes limit # random wikipedia pages
predict(what) // IMPORTANT: Must be used AFTER scraping, will not work if scraping is unfinished. Predicts the next word after the one you put in.
// So let's write a page that predicts user input!

<button onclick="predictInput(prompt('What do you want to predict?'))">Predict something</button>
<script src="https://F1reDude123.github.io/ScrAIp/main.js"></script>
<script>
var predictor = new ScrAIp1(); // Create the class
predictor.easyScrape(10); // Scrape 10 random pages

function predictInput(what) {
  predictor.predict(what); // Finally, predict the text!
}
</script>
```
More info will be available on the website.
Hope you have fun with ScrAIp :)
