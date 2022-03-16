"use strict";

let book = {
    author : "Enrico",
    title: "Learning JS",
    for: "Students",
    pages: 340,
    "chapter pages": [30,50,60,100],
};

console.log(book);
const persona = book.author;
book.title = "Advanced Js";
//In questo momento creo un proprieta'
book.editor = "Polito";
console.log(book);

//importante farlo per evitare errori se il codice viene modificato
//evitiamo di dereferenziare cose che non esistono, errore equivalente di null pointer exception
let surname = book && book.author && book.author.surname;
console.log(surname);

const book2 = Object.assign({}, book);
console.log(book2);
//un metodo alternativo potrebbe essere questo
const book3 = {...book};
console.log(book3);

const {author,...rest} = book;
console.log(author);







