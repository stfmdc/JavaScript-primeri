// var userInput = prompt("Enter day of the week");
// var day = parseInt(userInput);

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Please enter a valid input!");
// }

//

// var subject = prompt("Choose a subject (JS, C#, HTML)")
// var subjectToLower = subject.toLocaleLowerCase();

// switch (subjectToLower) {

//     case "js":
//         alert("We are going to learn JS");
//         break;
//     case "c#":
//         alert("We are going to learn C#");
//         break;
//     case "html":
//         alert("We are going to learn HTML");
//     case "css":
//         alert("And CSS as well.");
//         break;
//     default:
//         alert("We are not learning anything.");
//         break;
// }

//

// var boja = prompt("Izaberite omiljenu boju");

// switch (boja) {
//     case "crvena":
//         break;
//     case "zuta":
//         break;
//     case "plava":
//         break;
//     case "zelena":
//         break;
//     default:
//         alert(`Niste uneli validnu boju!`);
// }

// alert(`Boja koju je korisnik izabra je: ${boja}!`);

// // FUNKCIJE

// greeting(); // praksa pozvati PRE izvrsenja
// function greeting() {
//     console.log("Hello from function!");
// }

// // f-je sa argumentina - argumenti su x,y,z itd

// sabiranje(1,3,5)
// function sabiranje(x,y,z) {
//     var rezultat = x + y + z;
//     console.log(rezultat, 'rezultat');
// }
// mnozenje(1,3,5)
// function mnozenje(x,y,z) {
//     var proizvod = x * y * z;
//     console.log(proizvod, 'proizvod');
// }
// oduzimanje(5,3,1)
// function oduzimanje(x,y,z) {
//     var razlika = x - y - z;
//     console.log(razlika, 'razlika');
// }
// deljenje(20, 10, 1)
// function deljenje(x,y,z) {
//     var kolicnik = x / y / z;
//     console.log(kolicnik, 'kolicnik');
// }

// // EXERCIZE - povrsina kruga

// povrsinaKruga(2)
// function povrsinaKruga(r) {
//     var r = Math.pow(2,2)
//     var povrsina = r * Math.PI;
//     console.log(povrsina, 'povrsina');
// }

// EXERCISE - kvadrat vs pravougaonik

// povrsina(5,5)
// function povrsina(a, b) {
//     var rezultat = a * b;
//     console.log(rezultat, 'rezultat');
//     if (a===b) {
//         console.log("Ovo je kvadrat");
//     } else {
//         console.log("Ovo je pravougaonik");
//     }
// }

// Function declarations
// sumNumbers(1,2);
// subtractNumbers(1,2);
// multiplyNumbers(1,2);

// function sumNumbers(x, y) {
//     let result = x + y;
//     console.log(sumNumbers);
//     return result;
// }

// function subtractNumbers(x, y){
//     let result = x - y;
//     console.log(subtractNumbers);
//     return result;
// }

// function multiplyNumbers(x, y){
//     let result = x * y;
//     console.log(multiplyNumbers);
//     return result;
// }

// function simpleFunction () {
//     //lots of code
//     let foo = 500; //local varable
//     //lots of code
//     console.log(foo, "from function"); //500
// }
// simpleFunction();
// console.log(foo, "from global"); //undefined

// function simpleFunction () {
//     //lots of code
//     let foo = 500; //local varable
//     //lots of code
//     console.log(foo, "from function"); //500
//     return foo
// }
// simpleFunction();
// let foo = simpleFunction();
// console.log(foo, "from global"); //global

// let foo = 500; //global varable
// function simpleFunction() {
//     //lots of code
//     foo = 600; //globar varable // dodati let ispred za primer //
//     //lots of code
//     console.log(foo); //600
// }
// simpleFunction();
// console.log(foo); //600

// function foo(){
//     a = 1 //`a` not formally declared
// }
// foo();
// console.log(a);

// let message = "Outside the function";
// function warning(message) {
//     console.log(a); // 1--oops, auto global var
//     console.log(message);
// }
// warning("Inside the function");
// console.log(message);

// var fullMoon = true;
// let species = "human"; //initialize a global var
// if (fullMoon) {
//     let species = "werewolf" //initialize a block-scoped var
//     console.log(`It is a full moon. Lupin is currently a ${species}.`);
// }
// console.log(`It is not a full moon. Lupin is currently a ${species}.`);

// function celzijusToFarenhajt(celzijus) {
//     var farenhajt = (celzijus * 1.8) + 32;
//     return farenhajt;
// }

// var celzijus = 5;
// var farenhajt = celzijusToFarenhajt(celzijus);
// console.log(celzijus + " stepeni celzijusa je isto što i " + farenhajt + " stepeni farenhajta.");

// function farenhajtToCelzijus(farenhajt) {
//     var celzijus = (5/9) * (farenhajt - 32);
//     return celzijus;
// }

// var farenhajt = 41;
// var celzijus = farenhajtToCelzijus(farenhajt);
// console.log(farenhajt + " stepeni farenhajta je isto što i " + celzijus + " stepeni celzijusa.");

// // uraditi oba primera i sa prompt, ako je NaN onda poruka o gresci


// let currentYear = new Date().getFullYear(); //moze i 2024 ili godina po izboru
// let birthYear = 1994;
// let calculateAge = currentYear - birthYear;
// console.log("Trenutno imam " + calculateAge + " godina.");

// let birthYear = 1994;
// let currentYear = 2024;
// function calculateAge(birthYear) {
//     let currentAge = currentYear - birthYear;
//     return currentAge;
//   }
//   let currentAge = calculateAge(birthYear);
//   console.log("Trenutno imam " + currentAge + " godina.");
  
