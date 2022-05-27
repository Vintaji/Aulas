var avgTemp = [];

avgTemp[0] = 10;
avgTemp[1] = 20;
avgTemp[2] = 30;
avgTemp[3] = 40;
avgTemp[4] = 50;

console.log('A Temperatura está em ' + avgTemp[0] + ' graus');



var daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];

console.log('Hoje é ' + daysOfWeek[0]);

for (var days of daysOfWeek) {
    console.log(days);
}


var fibonnaci = [];
fibonnaci[0] = 0;
fibonnaci[1] = 1;
fibonnaci[2] = 2;

for(var i = 3; i < 20; i++) {
    fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2];
}

console.log(fibonnaci);