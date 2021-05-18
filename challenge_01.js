
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/
let number1, number2, number3;
number1 = prompt("Bitte eine Zahl eingeben");
number2 = prompt("Bitte noch eine Zahl eingeben");

/*
number1 = Number(number1);
number2 = Number(number2);
number3 = number1 + number2;
*/

number3 = +number1 + +number2;


//number3 = Number(number1) + Number(number2);

console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);


console.log("Die Summe der Zahlen ist: " + number3 );
