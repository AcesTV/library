let myLibrary = [];

let counter = 0;

class book {
    constructor(author, title, pages) {
        this.id = counter++;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }

    changeRead() {
        this.read = !this.read;
    }

    removeBook() {
        let index = myLibrary.findIndex((book) => book.id === this.id);
        console.log(index);
        myLibrary.splice(index, 1);

    }

    addbook() {
        myLibrary.push(this);
    }

}



const book0 = new book("Pierre", "Le loup", "215");
const book1 = new book("Jean de la Fontaine", "La Fourmis", "78");
book1.changeRead();

myLibrary.push(book0, book1);

const displayBooks = document.getElementById("displayBooks");

myLibrary.forEach(book => {
    console.log(book);
    console.log(displayBooks);
    displayBooks.innerHTML += "<div class='bookCard' data-idBook=" + book.id + ">" +
        "<h3 class='bookTitle'>" + book.title + "</h3>" +
        "<h4 class='bookAuthor'>" + book.author + "</h4>" +
        "<h4 class='bookPages'>" + book.pages + "</h4>" +
        "<label class='switch'>" +
        "<input type='checkbox'>" +
        "<span class='slider round'></span></label> " +
        "<button class='button'>Remove</button>" +
        "</div>";

    if (book.read) {
        console.log("read");
        document.querySelector("[data-idbook='" + book.id + "'] input[type='checkbox'").checked = true;
    }
})
