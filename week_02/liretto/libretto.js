const dayjs = require('dayjs');

let now = dayjs();

console.log(now.format());

let libretto = [];

let esame = {nome: "AW1", voto: 30, data: dayjs('2022-03-03').format()};

function Exam(nome, voto,code, cfu,lode, data){
    this.nome = nome;
    this.voto = voto;
    this.code = code;
    this.cfu = cfu;
    this.data = data;
    this.lode = lode;
    //`` si chiama backtick
    this.str = function (){return `${this.nome} ${this.voto} ${this.data.format()}`};
}


function ExamList(){
    this.list = [];
    this.add = (e) => this.list.push(e);
    this.average = () =>{
        let avg = 0;
        for(const i of this.list)
            avg += i.voto;
        return avg/this.list.length;
    };

    this.find = (code) =>{
        for(const e of this.list){
            if(e.code === code)
                return e;
            return undefined;
        }
    };
}

const wa1 = new Exam("WA1", 30,'01abc',6,true, dayjs('2022-03-04'));
const ps = new Exam('Ps', 29, '02bcd', 10, false, dayjs('2022-03-08'));
console.log(wa1.str());

const exams = new ExamList();
exams.add(wa1);
exams.add(ps);
console.log(exams.average());

console.log(exams.find(wa1.code).str());
 