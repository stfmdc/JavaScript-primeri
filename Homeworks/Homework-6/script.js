// #1 chicken calculator
/*
function weightInChickens() {
    var inputWeight = prompt(`Unesite težinu u kilogramima:`);
    var weightInKg = parseFloat(inputWeight);
    var weightInChickens = weightInKg / 0.5;

    var resultParagraph = document.getElementById("resultParagraph");
    resultParagraph.innerHTML = `Uneta težina je srazmerna broju od: ` + weightInChickens + ` pilića`;
}

weightInChickens();
*/

// #2 menjanje HTML-a uz pomoc JS-a
/*
document.getElementById("changeTitle").innerHTML = "Changed Title";
document.getElementById("changeSubtitle").innerHTML = "Updated Subtitle";

var paragraphs = document.getElementsByClassName("paragraph");
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].innerHTML = "New paragraph text";
}

document.getElementById("myTitle").innerHTML = "Updated Title";
*/

// #3 array numbers
/*
var numbers = [2, 4, 5, 3, 7];
var numberList = document.getElementById("numberList");
numbers.forEach(function(number) {
    var listItem = document.createElement("li");
    listItem.textContent = number;
    numberList.appendChild(listItem);
});

var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

var sumParagraph = document.getElementById("sumParagraph");
sumParagraph.textContent = "Zbir: " + sum;

var equation = numbers.join(" + ") + " = " + sum;
sumParagraph.insertAdjacentHTML('afterend', "<p>" + equation + "</p>");
*/