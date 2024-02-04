// #1 findNumber funkcija

/*
function findNumber() {
    const inputNumber = prompt(`Molimo Vas da unesete neki broj:`);
    const number = parseInt(inputNumber);

    if (!isNaN(number)) {
        if (number % 2 === 0) {
            alert(number + ` je paran broj.`);
        } else {
            alert(number + ` je neparan broj.`);
        }
    } else {
        alert(`Molimo da unesete broj!`);
    }
}

findNumber();
*/

// #2 concatenateStrings funkcija

/*
function concatenateStrings(arrayOfStrings) {
    return arrayOfStrings.join(' ');
}

const exampleArray = ["Hello", "there", "students", "of", "SEDC", "!"];
const resultString = concatenateStrings(exampleArray);

console.log(resultString);
*/

// #3 loop broje 1-20

/*
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + "\n");
    } else {
        console.log(i + " ");
    }
}
*/

// #4 funkcija max-min-suma

/*
function sumMinMax(arr) {
    const numbers = arr.filter(item => typeof item === 'number');

    if (numbers.length === 0) {
        return "Nije pronađen validan broj u nizu.";
    }

    const maxNumber = Math.max(...numbers);
    const minNumber = Math.min(...numbers);
    const sum = maxNumber + minNumber;

    return `Max: ${maxNumber}, Min: ${minNumber}, Suma: ${sum}`;
}

const inputArray = [3, 5, 6, 8, 11];
const result = sumMinMax(inputArray);

console.log(result);
*/

// #5 funkcija ime-prezime

/*
function createFullNames(firstNames, lastNames) {
    if (firstNames.length !== lastNames.length) {
        return "Nizovi moraju imati istu dužinu.";
    }

    const fullNames = firstNames.map((firstName, index) => `${index + 1}. ${firstName} ${lastNames[index]}`);

    return fullNames;
}

const firstNamesArray = ["Petar", "Marko", "Nikola"];
const lastNamesArray = ["Petrović", "Marković", "Nikolić"];

const result = createFullNames(firstNamesArray, lastNamesArray);

console.log(result);
*/