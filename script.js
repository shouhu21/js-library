// array for book objects
let myLibrary = [];

// book constructor
function book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function() {
    return title + ' by ' + author + ' ' +  pages + ' pages, ' + read;
 };
}

// function which renders the book object to html
function render() {
  myLibrary.forEach(book(title, autor, pages, read) => {
    book.info().querySelector('.library__book');
  });
}


// function which adds a book to the library array
const addBookToLibrary = (title, author, pages, read) => {
  new book === title,author,pages,read;
  myLibrary.push(book);
}
