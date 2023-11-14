const myLibrary = [];
let bookTrack = 0;
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
        bookTrack = 0;
      }
      myLibrary.forEach(book => {
        const row = tableBody.insertRow();
        row.dataset.newAttribute = bookTrack.toString();
        Object.values(book).forEach(info => {
            if(info === "Read" || info === "Not Read"){
                const cell = row.insertCell();
                cell.classList.add('table-heading');
                const readButton = document.createElement('button');
                readButton.textContent = info;
                readButton.classList.add('read-button');
                cell.appendChild(readButton);
                    readButton.addEventListener('click',function(){
                        if(readButton.textContent === "Read"){
                            readButton.textContent = "Not Read";
                        }
                
                        else if(readButton.textContent === "Not Read"){
                            readButton.textContent = "Read";
                        }
                    })
                }
            
            else{
                const cell = row.insertCell();
                cell.classList.add('table-heading');
                cell.textContent = info;
            }
            
        })
    bookTrack = bookTrack + 1; 
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


  

