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

// get input values
let bookTitle;
let bookAuthor;
let bookPages;
let bookRead;

function getInput() {
  let inputTitle = document.getElementById("title");
  let inputAuthor = document.getElementById("author");
  let inputPages = document.getElementById("pages");
  let inputRead = document.getElementById("read");

  bookTitle = inputTitle.value;
  bookAuthor = inputAuthor.value;
  bookPages = inputPages.value;
  bookRead = inputRead.value;
}

// form control
function showForm() {
  document
    .querySelector(".form-container")
    .style.setProperty("display", "flex");
}

function hideForm() {
  document
    .querySelector(".form-container")
    .style.setProperty("display", "none");
}
// add book button
document.querySelector(".button__addbook").addEventListener("click", showForm);

// submit book button
document.querySelector(".button__submit").addEventListener("click", () => {
  getInput();
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  resetForm();
  hideForm();
});

// reset form
function resetForm() {
  document.getElementById("InputFields").reset();
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