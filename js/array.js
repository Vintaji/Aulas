/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
// AULA 03
var avgTemp = [];

avgTemp[0] = 10;
avgTemp[1] = 20;
avgTemp[2] = 30;
avgTemp[3] = 40;
avgTemp[4] = 50;

// console.log('A Temperatura está em ' + avgTemp[0] + ' graus');


// AULA 04
var daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];

for (var days of daysOfWeek) {
    // console.log(days);
}

// console.log('Hoje é ' + daysOfWeek[0]);


// AULA 05
var fibonnaci = [];
fibonnaci[0] = 0;
fibonnaci[1] = 1;
fibonnaci[2] = 2;

for(var i = 3; i < 20; i++) {
    fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2];
}

// console.log(fibonnaci);


// AULA 06, 07 e 08
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers[10] = 10;
// numbers[numbers.length] = 10;
numbers.push(10);    //Adiciona um elemento no fim do array.
numbers.unshift(-1); //Adiciona um elemento no inicio do array.
// numbers.[0] = -10
numbers.pop();       //Remove ultimo elemento do array.
numbers.shift();     //Remove primeiro elemento do array.

numbers.splice(1, 1);       //Remove elementos de um array usando posições e quantidades especificas.
numbers.splice(1, 0, 1);    //Adiciona elementos de um array usando posições e quantidades especificas.

// console.log(numbers);


// AULA 09
var avgTempWeek = [];

var avgTempWeek1 = [1, 2, 3, 4, 5, 6, 7];
var avgTempWeek2 = [8, 9, 10, 11, 12, 13, 14];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

// console.log(avgTempWeek[0][1]);


// AULA 10
var month = [];

var firstWeek = [];
var lastWeek = [];

var avgTempWeek1 = [1, 2, 3, 4, 5, 6, 7];
var avgTempWeek2 = [8, 9, 10, 11, 12, 13, 14];
var avgTempWeek3 = [15, 16, 17, 18, 19, 20, 21];
var avgTempWeek4 = [22, 23, 24, 25, 26, 27, 28];

var firstWeek = [avgTempWeek1, avgTempWeek2];
var lastWeek = [avgTempWeek3, avgTempWeek4];

var month = [firstWeek, lastWeek];

console.log(month[1][1][2]);

month.forEach(function each(item) {
    if (Array.isArray(item)) {
        item.forEach(each);
    } else {
        console.log(item);
    }
});

