function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}
const prince = new Book(1001, '"Маленький принц"', 'Антуан де Сент-Экзюпери', 1943);
const harry = new Book(1002, '"Гарри Поттер и философский камень"', 'Дж. К. Роулинг', 1997);
const game = new Book(1003, '"Игра престолов"', 'Джордж Р. Р. Мартин', 1996);
const book_1984 = new Book(1004, '"1984"', 'Джордж Оруэлл', 1949);
const library = [prince, harry, game, book_1984];
console.log(prince);
console.log(harry);
console.log(game);
console.log(book_1984);


printLibrary(library);
function printLibrary(library) {
    for (let key in library) {
        if (typeof library[key] === 'function') {
            console.log(`${key}: -> ${library[key]()}`);
        }
        else {
            console.log(`${key}: -> ${library[key]}`);
        }
    }
}

function addBook(isbn, title, author, year) {
    return library.push(new Book(isbn, title, author, year));
}

addBook(1005, '"Тысяча великолепных солнц"', 'Халед Хоссейни', 2007);

function findBook(isbn){
    for (let i in library) {
        if (library[i].isbn === isbn) {
            console.log(`Книга с ISBN ${isbn} найдена, индекс: ${i}.`);
            return i;
        }
    }
    console.log(`Книга с ISBN ${isbn} не найдена, индекс: -1.`);
    return -1;
}
console.log(findBook(1004));

let inputData = prompt('Enter book data separated by ";" (ISBN, Title, Author, Year)');

while (inputData) {

    if (findBook(isbn) === -1) {
        addBook(isbn, title, author, year);
        console.log(`Книга с ISBN ${isbn} успешно добавлена в библиотеку.`);
    } else {
        console.log(`Книга с ISBN ${isbn} уже существует в библиотеке.`);
    }

    inputData = prompt('Enter book data separated by ";" (ISBN, Title, Author, Year)');
}




