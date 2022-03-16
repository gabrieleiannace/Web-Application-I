'use strict';

const sqlite = require('sqlite3');
const db = new sqlite.Database('exams.sqlite', (err) => {
    if(err) throw err;
});




const sql = 'select * from course';

db.all(sql, (err, rows) => {
    if(err) throw err;
    for(let row of rows){
        console.log(row);
    }
});

console.log('questo messaggio viene ahimè visualizzato prima!');


db.close();
