
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displaybooks() {
        const storedbooks = [
            {
            title: 'harry potter',
            author: 'robert',
            isbn: '34526',
            },
            {

            title: 'stock markets',
            author: 'warren',
            isbn: '8492792',

             }];

        const books=storedbooks;

        books.forEach((book) => UI.addbooktolist(book));
            
        
    }
    static addbooktolist(book){
        const list=document.querySelector('#book-list');

        const row=document.createElement('tr');

        row.innerHTML= `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
      
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
`
        ;
        list.appendChild(row);
    }

    static clearfield(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }

    static deletebook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
}


document.addEventListener('DOMContentLoaded',UI.displaybooks);

document.querySelector('#book-form').addEventListener('submit',function (e) {
        e.preventDefault();
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        if(title==='' || author===''|| isbn===''){
            alert("please fill fields");
        }else{

        

        const book= new Book(title,author,isbn);
UI.addbooktolist(book);
UI.clearfield();
        }

    });

document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deletebook(e.target)
});