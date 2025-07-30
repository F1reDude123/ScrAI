var idx = 0;
var words;
function scrape(id) {
  if (idx <= 10) {
    fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${id}&format=json&origin=*`).then(e => e.json()).then(i => {
      var data = new DOMParser().parseFromString(i.parse.text["*"], "text/html");
      var text = "";
      data.querySelectorAll("p, ul, ol, a").forEach(c => {
        text += c.innerText+"\n";
      });
      words = text.split(/[ \n]+/).map(word => word.replace(/[^a-zA-Z ]/, ""));
    });
    idx++;
  }
}

for (var i = 0;i<=100;i++) {
  fetch("https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*").then(e => e.json()).then(i => {scrape(i.query.random[0].title)});
}

function predict(after) {
  if (!words.includes(after)) return alert("Sry coundlt predict that");
  alert(words[words.indexOf(after)+1]);
}





















