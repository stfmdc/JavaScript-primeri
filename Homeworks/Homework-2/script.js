var input = prompt("Molimo unesite godinu Vašeg rođenja:");
var year = parseInt(input);

if (!isNaN(year)) {
    var zodIndex = (year - 4) % 12;

    if (zodIndex < 0) {
        zodIndex += 12;
    }

    var zodZnak;
    if (zodIndex === 0) {
        zodZnak = "pacov";
    } else if (zodIndex === 1) {
        zodZnak = "vo";
    } else if (zodIndex === 2) {
        zodZnak = "tigar";
    } else if (zodIndex === 3) {
        zodZnak = "zec";
    } else if (zodIndex === 4) {
        zodZnak = "zmaj";
    } else if (zodIndex === 5) {
        zodZnak = "zmija";
    } else if (zodIndex === 6) {
        zodZnak = "konj";
    } else if (zodIndex === 7) {
        zodZnak = "koza";
    } else if (zodIndex === 8) {
        zodZnak = "majmun";
    } else if (zodIndex === 9) {
        zodZnak = "petao";
    } else if (zodIndex === 10) {
        zodZnak = "pas";
    } else {
        zodZnak = "svinja";
    }

    var zodPozadina = {
        pacov: "https://www.rd.com/wp-content/uploads/2020/11/Rat.jpg?w=2048",
        vo: "https://www.rd.com/wp-content/uploads/2020/11/Ox.jpg?w=2048",
        tigar: "https://www.rd.com/wp-content/uploads/2020/11/Tiger.jpg?w=2048",
        zec: "https://www.rd.com/wp-content/uploads/2020/11/Rabbit.jpg?w=2048",
        zmaj: "https://www.rd.com/wp-content/uploads/2020/11/Dragon.jpg?w=2048",
        zmija: "https://www.rd.com/wp-content/uploads/2020/11/Snake.jpg?w=2048",
        konj: "https://www.rd.com/wp-content/uploads/2020/11/Horse.jpg?w=2048",
        koza: "https://www.rd.com/wp-content/uploads/2020/11/Goat.jpg?w=2048",
        majmun: "https://www.rd.com/wp-content/uploads/2020/11/Monkey.jpg?w=2048",
        petao: "https://www.rd.com/wp-content/uploads/2020/11/Rooster.jpg?w=2048",
        pas: "https://www.rd.com/wp-content/uploads/2020/11/Dog.jpg?w=2048",
        svinja: "https://www.rd.com/wp-content/uploads/2020/11/Pig.jpg?w=2048",
    };

    var backgroundImageUrl = zodPozadina[zodZnak];

    document.body.style.backgroundImage = `url('${backgroundImageUrl}')`;
    document.body.style.backgroundSize = '1000px';

    zodZnak = zodZnak.toUpperCase();

    alert(`Čestitamo! U kineskom horoskopu Vi ste ${zodZnak}!`);
} else {
    alert(`Molimo Vas da unesete validnu godinu.`);
}