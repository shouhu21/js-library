// document variables
const book-card   = document.querySelector('.library__book');
const book-close  = document.querySelector('.library__close');
const book-read   = document.querySelector('.library__read');
const book-name   = document.querySelector('.library__name');
const book-author = document.querySelector('.library__author');
const book-pages  = document.querySelector('.library__pages');

// array for book objects
let myLibrary = [];

// book constructor
function book(title, author, pages, read) {
  this.title  = title,
  this.author = author,
  this.pages  = pages,
  this.read   = read
}

// adds a book to the library array
function addBookToLibrary(title, author, pages, read) {
  let Book = new book(title,author,pages,read);
  myLibrary.push(Book);
}

// renders the book object to html
function render() {

}





// TESTING: adds test book to library array
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295', 'read');
