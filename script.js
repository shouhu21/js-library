let myLibrary = ['TestBook'];

function book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function() {
    return title + ' by ' + author + ' ' +  pages + ' pages, ' + read;
 };
};

function render() {
  console.log(myLibrary);
};

const addBook = (title, author, pages, read) => {
  new book === title,author,pages,read;
  book.title;
};

let theHobbit = new book('The Hobbit,','J.R.R Tolkien,', '295', 'not yet read');

console.log(theHobbit.info());
render();
