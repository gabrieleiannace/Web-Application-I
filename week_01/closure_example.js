"use strict";

function greeter(name){
    const myname = name;

    //Attenzione: la funzione qui é definita e non eseguita
    const hello = function(){
        return "Hello " + myname;
    }

    return hello;
}

const helloTom = greeter("Tom");
const hellloJerry = greeter("Jerry");
console.log(helloTom());
console.log(hellloJerry());

//Nota: provare con un oggetto!