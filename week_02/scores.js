"use strict";

const myScores = [18, 30, 25, 28, 24, 30, 27];

//duplico l'array
//const modifiedScores = Object.assign({}, myScores);

//    Posso altrimenti fare
const modifiedScores = [...myScores];

//Per eliminare i voti piú bassi puó essere utilie ordinare l'array
modifiedScores.sort(    (a,b) => a-b      );

console.log(modifiedScores);

//Togliamo i primi due voti:
const NUM = 2;
for(let i = 0; i < NUM; ++i)
    modifiedScores.shift();

console.log(modifiedScores);

//Facciamo la media dei voti

let media = 0;
for(const mark of modifiedScores){
    media += mark;
}
media = media/modifiedScores.length;
media = Math.round(media);
console.log(media);

//Aggiungiamo la media come voto finale
modifiedScores.push(media);

console.log(modifiedScores);

