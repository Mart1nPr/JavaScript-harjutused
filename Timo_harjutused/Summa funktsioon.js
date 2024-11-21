// Kirjuta programm mis küsib kasutajalt kahte arvu ja liidab need kokku.

let First_number = prompt("Enter a first number");
let Second_number = prompt("Enter a second number");

First_number = Number(First_number);
Second_number = Number(Second_number);

if (!isNaN(First_number) && !isNaN(Second_number)) {
    Result = Number(First_number) + Number (Second_number);
    console.log(First_number + " + " + Second_number + " = " + Result);
} else {
    console.log("These aren't numbers");
}
