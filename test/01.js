"use strict";

//Attenzione: non usare "in" negli array, il risultato non é quello atteso
const v = ['a','b','c'];
console.log('b' in v);

let book = {
    author: "gabriele",
    title: "l'arte dell'inganno",
    anno: 2004
};
console.log(book);
//In questo caso, dato che book é un oggetto e possiede la coppia chiave valore
//funziona e mi restituisce true
console.log('anno' in book);


//Attenzione: parametro di default 3, se non metto argomenti nella funzione il risultato é 9
function square(x = 3) {
    let result = x*x;
    return result;
}

let result = square(2);
console.log(result);

//Checking missing or optioal parameter
//if(p === undefined) p = 4;


function quadrato(x) {
    x = x || 2;
    let result = x*x;
    return result;
}

console.log(quadrato());



function fun(param1, param2, ...other){
    console.log(other);
    return;
}

fun(1,2,3,4,5);

//Esempio concreto
function somma_tutti(first, ...n){

        let sum = first;
        for (let index of n){
            sum += index;
        }
        return sum;

}

console.log(somma_tutti(1,1,1,1,1));




const incrementa = function(x){
    x+=1;
    console.log(x);
}

incrementa(1);

//Attenzione: un altro importante modo per chiamare una funzione é l'arrow function
const funzione = (x) => result = x*x;
console.log(funzione(4));


//Dichiariamo un funzione con l'arrow Function

const roba = (x) => x+=x;

console.log(roba(1));

//Testing github dir 1