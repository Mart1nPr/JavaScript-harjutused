array = [];
let sum = 0;

for(let i = 0; i<=2; i++) {
    sisend = prompt('Kijruta 3 arvu mida liita kokku:')
    array.push(sisend)
} 

for (let i = 0; i<=2; i++) {
sum = sum + Number(array[i]);

}
console.log('Vastus: '+ sum);