var idx = 0;
var words;
function scrape(id) {
  if (idx <= 10) {
    fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${id}&format=json&origin=*`).then(e => e.json()).then(i => {
      var data = new DOMParser().parseFromString(i.parse.text["*"], "text/html");
      var text = "";
      var link;
      data.querySelectorAll("p, ul, ol, a").forEach(c => {
        if (c.tagName == "A" && link == null && c.href.includes("wiki/")) {
          link = c.href.split("wiki/")[1];
        }
        else {
          text += c.innerText+"\n";
        }
      });
      var words = text.split(/[ \n]+/);
      getPage(link);
    });
    idx++;
  }
}
fetch("https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*").then(e => e.json()).then(i => {scrape(i.query.random[0].title)});

function predict(after) {
  if (!words.includes(after)) return alert("Sry coundlt predict that");
  alert(words[words.indexOf(after)+1]);
}





















