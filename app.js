let myLibrary = [];
let bookTrack = 0;
let formInfo = document.querySelector('#form');
let tableBody = document.querySelector('#table-body');
function Book(title, author,readStatus,totalPages) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.totalPages = totalPages;
    
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('myLibrary')) {
        myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    }
    displayLibrary();
});

let displayLibrary= () => {
    //Restart display process everytime 
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
        bookTrack = 0;
      }
      myLibrary.forEach(book => {
        const row = tableBody.insertRow();
        row.dataset.newAttribute = bookTrack.toString();
        Object.values(book).forEach(info => {
            if(info === "Read" || info === "Not Read"){
                const cell = row.insertCell();
                cell.classList.add('table-element');
                const readButton = document.createElement('button');
                readButton.textContent = info;
                readButton.classList.add('read-button');
                cell.appendChild(readButton);
                    readButton.addEventListener('click',function(){
                        if(readButton.textContent === "Read"){
                            readButton.textContent = "Not Read";
                            myLibrary[ row.dataset.newAttribute].readStatus = "Not Read";
                            localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
                        }
                
                        else if(readButton.textContent === "Not Read"){
                            readButton.textContent = "Read";
                            myLibrary[ row.dataset.newAttribute].readStatus = "Read";
                            localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
                        }
                    })
                }
            
            else{
                const cell = row.insertCell();
                cell.classList.add('table-element');
                cell.textContent = info;
            }
        
            
        })
                bookTrack = bookTrack + 1; 
                const cell = row.insertCell();
                cell.classList.add('delete-cell');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = "Delete";
                deleteButton.classList.add("delete-button");
                cell.appendChild(deleteButton);
                deleteButton.addEventListener('click',function(){
                myLibrary.splice(parseInt(row.dataset.newAttribute, 10),1);
                row.remove();   
                displayLibrary();
                localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
                })
    })   
}
//submit form and add it to the array to give data for display
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
 localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
})


  

