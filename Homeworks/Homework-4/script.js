// funkcija tellStory se nalazi izmedju /* */

/*

function tellStory() {
    var name = prompt(`Unesite Vaše ime:`);
    var mood = prompt(`Unesite Vaše raspoloženje:`);
    var activity = prompt(`Unesite Vašu aktivnost:`);

    var story = `${name} se danas osećao/la ${mood} dok je uživao/la u ${activity}.`;
    console.log(story);
}

tellStory();

*/

// funkcija niz od 5 brojeva sa sabiranjem se nalazi izmedju /* */

/*

function calculateSum() {
    var numbers = [];

    for (var i = 0; i < 5; i++) {
        var userInput = prompt(`Unesite Vaših 5 brojeva:`);
        var number = parseFloat(userInput);

        if (isNaN(number)) {
            alert(`Morate da unesete validan broj!`);
            return;
        }

        numbers.push(number);
    }

    var sum = 0;
    for (var j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }

    alert(`Zbir svih unetih brojeva je: ` + sum);
}

calculateSum();

*/

// bonus funkcija validateNumber se nalazi izmedju /* */

/*

function validateNumber(number) {
    if (isNaN(number)) {
        return false;
    }
    return true;
}

function calculateSum() {
    var numbers = [];

    for (var i = 0; i < 5; i++) {
        var userInput = prompt(`Unesite Vaših 5 brojeva:`);
        var number = parseFloat(userInput);

        if (!validateNumber(number)) {
            alert(`Morate da unesete validan broj!`);
            return;
        }

        numbers.push(number);
    }

    var sum = 0;
    for (var j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }

    alert(`Zbir svih unetih brojeva je: ` + sum);
}

calculateSum();

*/