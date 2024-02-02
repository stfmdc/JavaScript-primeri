// // Selecting an element by Id and adding it to a variable for later use
// let myHeader = document.getElementById("myTitle");
// console.log(myHeader); // Will give us the whole element node
// console.log(myHeader.textContent); // Will give us the text inside the element

// // Selecting element by class and adding them to a variable for later use
// let paragraphs = document.getElementsByClassName("myParagraph");
// let secondParagraph = document.getElementsByClassName("second");
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(paragraphs[0]); // Will give us the first paragraph
// console.log(secondParagraph); // Will give us an array with 1 paragraph
// console.log(secondParagraph[0]); // Will give us the only paragraph

// // Selecting elements by tag name and adding them to a variable for later use
// let paragraphs = document.getElementsByTagName("p");
// let texts = document.getElementsByTagName("text");
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(paragraphs[0]); // Will give us the first paragraph
// console.log(texts); // Will give us an array with 1 text
// console.log(texts[0]); // Will give us the only text

// // Selecting elements by tag name and adding them to a variable for later uselet
// paragraphs = document.querySelectorAll("p");
// let firstP = document.querySelector(".myParagraph");
// let header = document.querySelector("#myTitle");
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(firstP); // Will give us the first paragraph it finds
// console.log(header); // Will give us the first header it finds

let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
console.log(titleDiv);
let contentDiv = myApp.children[1];
console.log(contentDiv);
 
let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];
 
function printGrades(subjects, grades, element){
    console.log(element);
    element.innerHTML = ""; // clearing element
    element.innerHTML += "<ul>";
    for(let i=0; i < subjects.length; i++){
        element.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`;
    }
    element.innerHTML += "</ul>"
}
 
function printStudents(students, element){
    element.innerHTML = ""; // clearing element
    element.innerHTML += "<ol>";
    for(let student of students){
        element.innerHTML += `<li>${student}</li>`;
    }
    element.innerHTML += "</ol>"
}
 
function academyPanel(person, name){
    if(person === "student" && name.length >= 2){ // if its student and has name longer than 1 letter
      titleDiv.innerHTML += "<h1><b>Hello there " + name + "</b></h1>";
      titleDiv.innerHTML += "<p>Welcome to your student page</p>";
      contentDiv.innerHTML += "<h3>Your grades:</h3>"
      console.log(contentDiv);
      printGrades(subjects, grades, contentDiv);
    } else if(person === "teacher" && name.length >= 2){
      titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
      <p>Welcome to your teachers page</p>`;
      contentDiv.innerHTML += "<h3>Your students:</h3>"
      printStudents(students, contentDiv);
    } else {
      titleDiv.innerHTML += "<h1><b>Your login was unsucessfull</b></h1>";
      titleDiv.innerHTML += "<p>Please try again!</p>";
    }
  }
 
  let input = prompt("Are you a student or a teacher?");
  let name = prompt("What is your name?");
academyPanel(input, name);