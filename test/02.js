"use strict";

//Esmpio di closure.
function greeter(nome){
    const myname = nome;

    const hello = () => "Hello" + ` ${myname}`

    return hello;
}

let tom = greeter("tom");
console.log(tom());

//Attenzione: possiamo usare le closure anche per emulare oggetti

function counter (){
    let value = 0;

    const getNext = () =>{
        value++;
        return value;
    }

    return getNext;
}

/*
const counter1 = counter();
console.log(counter1());
console.log(counter1());

const counter2 = counter();
console.log(counter2());
console.log(counter2());
*/

//Esempio piú avanzato.
function contatore(){
    let n = 0;

    return {
        count: () => ++n,
        reset: () => n = 0
    };
}

const contatore1 = contatore();
console.log(contatore1.count());
console.log(contatore1.count());
console.log(contatore1.count());

console.log(contatore1.reset());


const contatore2 = contatore();
console.log(contatore2.count());
console.log(contatore2.count());
console.log(contatore2.count());

console.log(contatore2.reset());

console.log("/////////////////////////////////////////////////////////////////////////");


const pippo = 0;
(function () {
    //Attenzione: uso questo stratagemma per poter invocare variabili private
    const pippo = 2;
    console.log(pippo);
})();

console.log(pippo);


//Costruttori.

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isNew = () => year>2002;
}

const fiat_500 = new Car('Fiat', 500, 2003);
console.log(fiat_500.isNew());