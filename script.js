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
  let inputTitle = document.getElementById("title");
  let inputAuthor = document.getElementById("author");
  let inputPages = document.getElementById("pages");
  let inputRead = document.getElementById("read");
  this.title = inputTitle.value;
  this.author = inputAuthor.value;
  this.pages = inputPages.value;
  this.read = inputRead.value;

  let Book = new book(this.title, this.author, this.pages, this.read);
  myLibrary.push(Book);
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
  addBookToLibrary();
  createBook();
  resetForm();
  hideForm();
});

// reset form
function resetForm() {
  document.getElementById("InputFields").reset();
}

// creates book "card"
function createBook(book) {

  //createDomElements
  let libraryContainer = document.querySelector(".library");
  let bookContainer = document.createElement("div");
  let closeHTML = document.createElement("div");
  let readHTML = document.createElement("div");
  let nameHTML = document.createElement("div");
  let authorHTML = document.createElement("div");
  let pagesHTML = document.createElement("div");

  myLibrary.forEach((book, i) => {
    //createId
    book.id = i + 1;

    //createCard;
    bookContainer.classList.add("library__book");
    closeHTML.classList.add("library__book-close");
    readHTML.classList.add("library__book-read");
    nameHTML.classList.add("library__book-name");
    authorHTML.classList.add("library__book-author");
    pagesHTML.classList.add("library__book-pages");

    bookContainer.setAttribute("id", "container" + `${book.id}`);
    closeHTML.setAttribute("id", "close" + `${book.id}`);
    readHTML.setAttribute("id", "read" + `${book.id}`);
    nameHTML.setAttribute("id", "name" + `${book.id}`);
    authorHTML.setAttribute("id", "author" + `${book.id}`);
    pagesHTML.setAttribute("id", "pages" + `${book.id}`);

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

    //renderInput;
    let renderName = document.getElementById("name" + `${book.id}`);
    let renderAuthor = document.getElementById("author" + `${book.id}`);
    let renderPage = document.getElementById("pages" + `${book.id}`);

    renderName.innerHTML = book.title;
    renderAuthor.innerHTML = "Author:<br>" + book.author;
    renderPage.innerHTML = "Pages:<br>" + book.pages;
  });
}
