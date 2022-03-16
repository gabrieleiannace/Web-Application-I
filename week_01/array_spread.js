"use strict";

let a = [1,4,9,16];

console.log(a);
//Join crea una stringa concatenando le stampe degli elementi di un array
let a_string = a.join('-');
console.log(a_string);
//il join non cambia la stringa di partenza ma crea una stringa nuova
console.log(a);

let b = ['a', 'b', 'c'];
let c = a.concat(b);
//concat stampa un nuovo array che concatena i due precedenti
console.log(c);

let d = ['*',b, '*'];
console.log(d);

d.push('+');
console.log(d);

const e = [...d,'p'];
e[1] = 2;
console.log(e);


let f = e;
console.log(f);

for(const val of e){
    console.log(val);
}
console.log("--------------------------------------------------------------");

for(let i = 0; i < e.length; i++){
    console.log(e[i]);
}
