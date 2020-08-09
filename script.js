// dom variables
const Card = document.querySelector('.library__book');
const Close = document.querySelector('.library__book-close');
const Read = document.querySelector('.library__book-read');
const Title = document.querySelector('.library__book-title');
const Author = document.querySelector('.library__book-author');
const Page = document.querySelector('.library__book-pages'); 

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


// book button




// book input form




// TESTING: adds test books to library array
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295', 'read');
addBookToLibrary('Shantaram', 'Gregory David Roberts', '936', 'not read');

// renders the book object properties to html

