"use strict";


//Attenzione: questo file non include cose scritte a lezione ma sono solo prove personali ed autonome
//Warning: puó contenere errori
let book = {
    author : "Enrico",
    title: "Learning JS",
    for: "students",
    pages: 340,
    "chapter pages": [90,50,60,140]
};

let person = book.author;
console.log(person);

let nome = book['author'];
console.log(nome);

let numPages = book['chapter pages'];
console.log(numPages);

book.title = "Advanced JS";
console.log(book.title);

let array = [ 1,1,1,1,1];
console.log(book["chapter pages"].push(...array));


console.log(book["chapter pages"]);

book.pippo = 12;
console.log(book.pippo);


//Notazione importante per evitare di dereferenziare un puntatore nullo
let surname = book && book.fifastreet && book.fifastreet.zerocalcare;
console.log(surname);

for(let index in book['chapter pages']){
    console.log("Con il numero " + `${index}`);
}





