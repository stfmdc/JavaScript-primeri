// const firstName = "Maja";
// const lastName = "Stefanovic";
// const fullName = firstName + " " + lastName;

// // var prom1 = "Dobar";
// // var prom2 = "dan";
// // var rez = prom1.concat(prom2) + "!";
// // console.log(rez);

// // // razlika izmedju obicne konkatenacije i interpolacije
// // var rez1 = `tekst ${prom1} neki tekst ${prom2} jos neki tekst`
// // var rez2 = "tekst" + prom1 + "neki tekst" + prom2 + "jos teksta"
// // console.log(rez1);
// // console.log(rez2);

// var a = "2" + 4;
// var b = 2 + "4";
// console.log(typeof a);
// console.log(typeof b);

// var c = 'It\'s really nice to be a programmer';
// console.log(c);

// var a = 2 / "Djole"; //NaN
// console.log(a);
// console.log(typeof a === "Milica"); //true

// //beware
// console.log(a == NaN); //false
// console.log(a === NaN); //false
// console.log(isNaN(a)); //true
// //but
// var b = "Djole";
// console.log(isNaN(b)); //true - konvertuje vrednost u broj - OUTDATED
// //ES6 to the rescue
// //finally
// console.log(Number.isNaN(b)); //proverava vrednost i da li je broj - KORISTITI UVEK

// var provera = (10 === 10);
// console.log(typeof provera);
// console.log(typeof provera === "boolean");



// // LOGICAL OPERATORS
// const statusA = "open" // const isto sto i var
// const longitude = 41.44;
// const latitude = 32.12;

// //logical AND
// const rez = (statusA === "open" && longitude > 0); //true and true = true
// console.log("rez:", rez); // true because both conditions are true

// //logical OR
// const rez1 = (statusA === "open" || latitude > 0);
// console.log("rez:", rez1); //true because the first condition is true

// //logical NOT
// //check
// const rez2 = (statusA !== "open");
// console.log("rez", rez2); //false

// /*

// == slaba jednakost - IZBEGAVATI
// === striktna jednakost - PRAKSA
// != slaba nejednakost 
// !== striktna nejednakost 

// */

// //example

// var score = "550"
// if(score >= 100) {
//     alert('You won!' + 'Your score is: ' + score);
// } else {
//     alert('You lost! Your score was: ${score}');
// }

// //uslov ? izraz_tacno : izraz_netacno
// var x = 5;
// var a = 10;
// var b = 20;
// var z = (x > 10 ? a : b) //ako je x vece od 10 bice a, u suprtnom bice b

// //multiple conditions
// var wage = 500;
// var role = "Senior";
// let bonus = 0;

// if (role === "Senior") {
//     bonus = wage * 2.2;10
// } else if (role === "Medium") {
//     bonus = wage * 1.6;
// } else if (role === "Junior") {
//     bonus = wage *1.2;
// } else {
//     bonus = wage * 1.1;
// }
// console.log(`A ${role} makes ${bonus} every month!`);

// //exercise #1
// let input = prompt("Koliko para trenutno imas?")
// let numberInput = parseInt(input);
// if(numberInput > 100) {
//     alert("Izadji negde napolje");
// } else {
//     alert("Idi zaradi jos para!")
// }

//exercise #2
var wage = 1000;
var role = prompt("Unesite Vas IT nivo Front-End programera:");
let bonus = 0;

if (role === "Senior".toLowerCase()) {
    bonus = wage * 2.6;
} else if (role === "Medium".toLowerCase()) {
    bonus = wage * 2.1;
} else if (role === "Junior".toLowerCase()) {
    bonus = wage * 1.6;
} else {
    bonus = wage * 1.1;
}

console.log(`Vasa pozicija ${role} ima ${bonus} $ ovaj mesec.`);