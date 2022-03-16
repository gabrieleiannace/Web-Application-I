"use strict";

const market = [
    {name : 'GOOG', var: -3.2},
    {name : 'ANZN', var: 2.2},
    {name : 'MSFT', var: -1.8}
];

//Usiamo una callback sulla funzione di filtering
const good = market.filter(stock => stock.var > 0);
const bad = market.filter(stock => stock.var < 0);

console.log(good);
console.log(bad);





