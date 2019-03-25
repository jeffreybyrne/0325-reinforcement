ex1 = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"]

ex1.forEach(function(word) {
  output = [];
  if ((word.length > 4) && (word.toLowerCase() == word)) {
    console.log('long and lowercase')
  } else if (word.toLowerCase() == word) {
    console.log('lowercase')
  } else if (word.length > 4) {
    console.log('long')
  } else {
    console.log(word)
  }
})
