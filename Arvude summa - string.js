// Arvude summa - string 23.10.2023


// Vigane kood
numbriteSisend = prompt('Kirjuta siia arvud tühikutega, mida liita.');
arvud = numbriteSisend.split(' ');
summa = 0;

for (i = 0; i < arvud.lenght; i++){
    summa += parseInt(arvud[i]);
}

console.log('Vastus: ' + summa);






