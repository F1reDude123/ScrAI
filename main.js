class ScrAIp1 {
  constructor() {}
  this.words=[];
  scrape(id) {
    fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${id}&format=json&origin=*`).then(e => e.json()).then(i => {
      var data = new DOMParser().parseFromString(i.parse.text["*"], "text/html");
      var text = "";
      data.querySelectorAll("p, ul, ol").forEach(c => {
        text += c.innerText+"\n";
      });
      this.words.push(...text.split(/[ \n]+/).map(word => word.replace(/[^a-zA-Z ]/g, "")));
    });
  }
  
  #indexOfNth(arr, val, n) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        if (count == n) return i;
        count++;
      }
    }
    return -1;
  }
  
  easyScrape(limit) {
    for (var i=0;i<=limit;i++) fetch("https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*").then(e => e.json()).then(i => {scrape(i.query.random[0].title)});
  }
  
  predict(after) {
    if (!this.words.includes(after)) throw new Error("Cannot predict word from this context");
    var afters = [];
    var filter = this.words.filter(word => word == after);
    var dict = {};
    for (var i=0;i<filter.length;i++) {
    	afters.push(this.words[this.#indexOfNth(this.words, after, i)+1]);
    }
    for (var i=0;i<afters.length;i++) dict[afters[i]] = 0;
    afters.forEach(e => {
    	dict[e]++;
    });
    return keys[values.indexOf(Math.max(...Object.values(dict)))];
  }
}
