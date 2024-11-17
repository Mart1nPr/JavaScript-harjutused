// Arvude summa - string/array 23.10.2023

const a = ['3 4 12 7 15 6'];
const numberArray = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] !== '') {
        numberArray.push(a[i]);
    }
}

sum = 0;

for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
}

console.log(numberArray);
console.log('Summa: '+ sum);