// PART 1
// function Animal(name, kind) {
//     this.name = name;
//     this.kind = kind;
// }

// Animal.prototype.speak = function(message) {
//     alert(`${this.kind} ${this.name} kaže: '${message}'`);
// };

// let animalName = prompt(`Unesite ime životinje:`);
// let animalKind = prompt(`Unesite vrstu životinje:`);
// let animal = new Animal(animalName, animalKind);

// let message = prompt(`Unesite poruku koju životinja izgovara:`);
// animal.speak(message);

// PART 2
function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
}

Book.prototype.displayReadingStatus = function() {
    if (this.readingStatus) {
        alert(`Svaka čast na čitanju knjige '${this.title}' koju je napisao ${this.author}.`);
    } else {
        alert(`Bacite se na čitanje '${this.title}' koju je napisao ${this.author}.`);
    }
};

let bookTitle = prompt("Unesite naziv knjige");
let bookAuthor = prompt("Unesite autora te knjige:");
let bookReadingStatus = confirm("Da li ste pročitali tu knjigu?");

let book = new Book(bookTitle, bookAuthor, bookReadingStatus);
book.displayReadingStatus();
