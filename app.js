const myLibrary = [];
let formInfo = document.querySelector('form');

function Book(title, author,readStatus,totalPages) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.totalPages = totalPages;
    
  }

formInfo.addEventListener('submit', (e) => {
 e.preventDefault();
 let title = document.querySelector('title').value;
 let author = document.querySelector('author').value;
 let totalPages = document.querySelector('read-status').value;
 let readStatus = document.querySelector('pages').value;


})


  

