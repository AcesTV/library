let myLibrary = [];

let counter = 0;

function displayRead(id) {

    console.log("checkbox");
    if (getBook(id).read == true) {
        document.querySelector("[data-idbook='" + id + "'] input[type='checkbox'").checked = true;
    } else {
        document.querySelector("[data-idbook='" + id + "'] input[type='checkbox'").checked = false;
    }
}

function getBook(id) {
    let book = myLibrary.find(book => book.id === id);
    return book;
}

function changeReadId(id) {
    console.log("change of read " + id);
    let book = getBook(id);
    book.changeRead();
    console.log(book);

}

function createBook() {
    let title = document.querySelector("input[name='title']").value
    let author = document.querySelector("input[name='author']").value
    let pages = document.querySelector("input[name='pages']").value
    let readed = document.querySelector("input[name='readed']").checked

    if (title != "" && author != "" && pages != "") {
        let newBook = new book(title, author, pages, readed)
        newBook.addBook();

        document.querySelector("input[name='title']").value = "";
        document.querySelector("input[name='author']").value = "";
        document.querySelector("input[name='pages']").value = "";
        document.querySelector("input[name='readed']").checked = false
    }



}



class book {
    constructor(title, author, pages, readed = false) {
        this.id = counter++;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = readed;
    }




    changeRead() {
        this.read = !this.read;
        displayRead(this.id);
    }



    removeBook() {
        let index = myLibrary.findIndex((book) => book.id === this.id);
        console.log(index);
        myLibrary.splice(index, 1);

        reDisplayBooks();

    }

    addBook() {
        myLibrary.push(this);

        reDisplayBooks();
    }

}

const displayBooks = document.getElementById("displayBooks");

const book0 = new book("Le loup", "Pierre", "215");
const book1 = new book("La Fourmis", "Jean de la Fontaine", "78");

myLibrary.push(book0, book1);


function reDisplayBooks() {

    displayBooks.innerHTML = "";

    myLibrary.forEach(book => {
        console.log(book);
        console.log(displayBooks);
        displayBooks.innerHTML += "<div class='bookCard' data-idBook=" + book.id + ">" +
            "<h3 class='bookTitle'>" + book.title + "</h3>" +
            "<h4 class='bookAuthor'>" + book.author + "</h4>" +
            "<h4 class='bookPages'>" + book.pages + "</h4>" +
            "<label class='switch'>" +
            "<input type='checkbox' onchange='changeReadId(" + book.id + ")'>" +
            "<span class='slider round'></span></label> " +
            "<button class='button' onclick='getBook(" + book.id + ").removeBook()'>Remove</button>" +
            "</div>";

        if (book.read) {
            console.log("read");
            document.querySelector("[data-idbook='" + book.id + "'] input[type='checkbox'").checked = true;
        }
    })
}


reDisplayBooks();