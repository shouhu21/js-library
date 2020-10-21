// array for book objects
let myLibrary = [];

// // dom variables
// const Card = document.createElement("div").classList.add("library__book");
// const Close = document
//   .createElement("div")
//   .classList.add("library__book-close");
// const Read = document.createElement("div").classList.add("library__book-read");
// const Title = document.createElement("div").classList.add("library__book-name");
// const Author = document
//   .createElement("div")
//   .classList.add("library__book-author");
// const Page = document.createElement("div").classList.add("library__book-pages");

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
  createCard();
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.forEach(render);
  resetForm();
  hideForm();
});

// reset form
function resetForm() {
  document.getElementById("InputFields").reset();
}

// TESTING: adds test books to library array
//addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295", "read");
//addBookToLibrary("Shantaram", "Gregory David Roberts", "936", "not read");

// creates book "card"
function createCard() {
  let libraryContainer = document.querySelector(".library");
  let bookContainer = document.createElement("div");
  let closeHTML = document.createElement("div");
  let readHTML = document.createElement("div");
  let nameHTML = document.createElement("div");
  let authorHTML = document.createElement("div");
  let pagesHTML = document.createElement("div");

  bookContainer.classList.add("library__book");
  closeHTML.classList.add("library__book-close");
  readHTML.classList.add("library__book-read");
  nameHTML.classList.add("library__book-name");
  authorHTML.classList.add("library__book-author");
  pagesHTML.classList.add("library__book-pages");

  closeHTML.innerHTML = "<i class='fas fa-times'></i>";
  readHTML.innerHTML = "<i class='fas fa-eye'></i>";
  nameHTML.innerHTML = "";
  authorHTML.innerHTML = "Author:";
  pagesHTML.innerHTML = "Pages:";

  libraryContainer.appendChild(bookContainer);
  bookContainer.appendChild(closeHTML);
  bookContainer.appendChild(readHTML);
  bookContainer.appendChild(nameHTML);
  bookContainer.appendChild(authorHTML);
  bookContainer.appendChild(pagesHTML);
}

// renders the book object properties to html
function render(book) {
  let renderName = document.querySelector(".library__book-name");
  let renderAuthor = document.querySelector(".library__book-author");
  let renderPage = document.querySelector(".library__book-pages");
  renderName.innerHTML = book.title;
  renderAuthor.innerHTML = "Author:<br>" + book.author;
  renderPage.innerHTML = "Pages:<br>" + book.pages;
}
