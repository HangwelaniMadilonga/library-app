const myLibrary = [];
let formInfo = document.querySelector('#form');
let tableBody = document.querySelector('#table-body');
function Book(title, author,readStatus,totalPages) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.totalPages = totalPages;
    
  }

let displayLibrary= () => {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }
      myLibrary.forEach(book => {
        const row = tableBody.insertRow();
        Object.values(book).forEach(info => {
            if(info === "Read" || info === "Not Read"){
                const cell = row.insertCell();
                cell.classList.add('table-heading');
                const readButton = document.createElement('button');
                readButton.textContent = info;
                cell.appendChild(readButton);
            }
            else{
                const cell = row.insertCell();
                cell.classList.add('table-heading');
                cell.textContent = info;
            }
            
        })
      })   
}

formInfo.addEventListener('submit', (e) => {
 e.preventDefault();
 let title = document.querySelector('#title').value;
 let author = document.querySelector('#author').value;
 let totalPages = document.querySelector('#pages').value;
 let readStatus = document.querySelector('#read-status').value; 

 const newBook = new Book(title, author, readStatus, totalPages);
 myLibrary.push(newBook);
 displayLibrary();
 formInfo.reset();
})


  

