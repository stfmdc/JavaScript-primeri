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
sumNumbers(1,2);
subtractNumbers(1,2);
multiplyNumbers(1,2);

function sumNumbers(x, y) {
    let result = x + y;
    console.log(sumNumbers);
    return result;
}

function subtractNumbers(x, y){
    let result = x - y;
    console.log(subtractNumbers);
    return result;
}

function multiplyNumbers(x, y){
    let result = x * y;
    console.log(multiplyNumbers);
    return result;
}