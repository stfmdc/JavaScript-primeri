// exercise 1&2
// var person = {
//     name: "Stefan",
//     age: 30,
//     city: "Belgrade",
//     games: ['Half-Life 2', 'Doom Eternal', 'Euro Truck Simulator'],

//     displayPerson: function(){
//         console.log(this);
//     },

//     updatePerson: function(newName, newAge, newCity, newGames) {
//         this.name = newName;
//         this.age = newAge;
//         this.city = newCity;
//         this.games = newGames;
//         console.log("Update:", this);
//     }
// }

// person.displayPerson();
// person.updatePerson("Petar", 20, "New Belgrade", ['CS', 'Minecraft', 'GTA']);

// exercise 3
let trainer = {
    name: "Stefan",
    lastName: "Mandić",
    academy: "SEDC",
    lecture: "Objects",

    getFullName: function() {
        return this.name + " " + this.lastName;
    }
}

console.log(trainer.getFullName());