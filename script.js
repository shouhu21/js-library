// dom variables
const Card = document.querySelector(".library__book");
const Close = document.querySelector(".library__book-close");
const Read = document.querySelector(".library__book-read");
const Title = document.querySelector(".library__book-name");
const Author = document.querySelector(".library__book-author");
const Page = document.querySelector(".library__book-pages");

// array for book objects
let myLibrary = [];

// book constructor
function book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

// adds a book to the library array
function addBookToLibrary(title, author, pages, read) {
  let Book = new book(title, author, pages, read);
  myLibrary.push(Book);
}

// book button
document
  .querySelector(".button__book")
  .addEventListener("click", activateForm());

// activate form
function activateForm() {
  document.querySelector(".form-container").classList.toggle("active");
}

// book input form
function bookInput() {
  let bookTitle = document.getElementById("title").value;
  let bookAuthor = document.getElementById("author").value;
  let bookPages = document.getElementById("pages").value;
  let bookRead = document.getElementById("read").value;
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
}

// TESTING: adds test books to library array
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295", "read");
//addBookToLibrary("Shantaram", "Gregory David Roberts", "936", "not read");

// renders the book object properties to html
function render() {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    Title.innerHTML = book.title;
    Author.innerHTML = "Author:<br>" + book.author;
    Page.innerHTML = "Pages:<br>" + book.pages;
  }
}