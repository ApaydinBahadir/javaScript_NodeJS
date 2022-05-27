const addWindow = document.getElementById("addWindow");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button")
const addButton = document.getElementById("addButton");
const logo = document.getElementById("logo");
const addBook = document.getElementById("addBook");
const author = document.getElementById("author");
const title = document.getElementById("title");
const page = document.getElementById("page");
const read = document.getElementById("read");
const booklist = document.getElementById("books-grid");

let myLibrary = [];

function Book(fauthor,ftitle,fpage,fread) {
    this.bookAuthor = fauthor;
    this.bookTitle = ftitle;
    this.bookPage = fpage;
    this.bookRead = fread;
}

function addBookToLibrary() {
    var sauthor = author.value;
    var stitle = title.value;
    var spage = page.value;
    var sread = read.checked;

    author.value = "";
    title.value = "";
    page.value = "";
    read.checked = false;

    let newBook = new Book(sauthor,stitle,spage,sread);
    myLibrary.push(newBook);

    updateHTML();
}

closeButton.addEventListener("click", function(){
    addWindow.style.zIndex = "-1";
    overlay.style.zIndex = "-1";
});

addButton.addEventListener("click", function(){
    addWindow.style.zIndex = "1";
    overlay.style.zIndex = "1";
});

addBook.addEventListener("click", function(){
    addBookToLibrary();
});

function updateHTML(){

    booklist.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        addBookToHTML(myLibrary[i]);
    }
}

function addBookToHTML(item){
    const div = document.createElement('div');
    const pAuthor = document.createElement('p');
    const pTitle = document.createElement('p');
    const pPages = document.createElement('p');
    const divRead = document.createElement('div');
    const pReadP = document.createElement('p');
    const pRead = document.createElement('input');
    pRead.setAttribute("type", "checkbox");
    
    div.className = "books";

    pAuthor.innerHTML = "Author: "+item.bookAuthor;
    pTitle.innerHTML = "Title: "+item.bookTitle;
    pPages.innerHTML = "Page: "+item.bookPage;
    pRead.checked = item.bookRead;
    pReadP.innerHTML = "Do you read:"

    booklist.appendChild(div);

    divRead.className = "bookReadCheck";

    divRead.append(pReadP);
    divRead.append(pRead);

    div.append(pAuthor);
    div.append(pTitle);
    div.append(pPages);
    div.append(divRead);

}