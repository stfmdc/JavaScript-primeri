// Exercise - feet to meters
var feet = 0.3048;
var meters = 10;
var length = feet * meters;
console.log("Duzina 10 stopa iznosi", length, "metara.");

// Exercise - povrsina pravougaonika
var a = 5;
var b = 15;
var c = a * b;
var string = "Povrsina pravougaonika je";
console.log(string, c, "metara.");

// Exercize - povrsina kruga
var r = 10; // poluprecnik
var precnik = r * r;
var pi = 3.14; // priblizno jer nismo ucili jos math.pi
var area = pi * precnik;
var string = "Povrsina kruga je";
console.log(string, area, "centimetara.");

// Exercize - obim kruga
var r = 10; // poluprecnik
var pi = 3.14 // priblizno jer nismo ucili jos math.pi
var area = 2 * r * pi;
var string = "Obim kruga iz gornje linije koda je";
console.log(string, area, "centimetara.");

// Homework - kupovina 30 telefona
var brojTelefona = 30;
var nabavnaCena = 119.95; // cena u dolarima
var pdv = 5; // pdv/tax rate
var cenaBezPdv = brojTelefona * nabavnaCena;
var cenaSaPdv = cenaBezPdv * (1 + pdv / 100);
console.log("Cena za 30 telefona bez PDV-a iznosi:", cenaBezPdv, "dolara.");
console.log("Cena za 30 telefona sa PDV-om iznosi:", cenaSaPdv, "dolara.");