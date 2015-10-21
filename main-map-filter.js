console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});


//NUMBER 1

_.pluck(items, "price")

var priceArray = _.pluck(items, "price")

var totalOfPrices = priceArray.reduce(function(a, b, c){
  return a + b
});

var averageOfPrices = totalOfPrices/priceArray.length


document.getElementById('answer1').innerHTML = averageOfPrices;


//NUMBER 2

var cost = items.filter(function(currElem, idx, arr){
   return currElem.price >= 14 && currElem.price <= 18;
});
var titleAndPrice = cost.map(function(currElem){
   return currElem.title + "<br>";
});



//NUMBER 3
var curcode = items.filter(function(el){
  return el.currency_code === "GBP"
});

var titleAndCode = curcode.map(function(el){
  return [el.title, el.price]

});
