//chiedo all'utente di inserire un numero 
//se il numero è divisibile per 3, scrivo in console FIZZ
//se il numero è divisibile per 5, scrivo in console BUZZ
//se il numeroè divisibile per entrambi, scrivo in console FIZZBUZZ

// const numeroInStringa = prompt('inserisci un numero');

// const numero = parseFloat(numeroInStringa);

// const isDivisibilePerTre = numero % 3 === 0;

// const isDivisibilePerCinque = numero % 5 === 0;

// if (isDivisibilePerTre && isDivisibilePerCinque) {
//     console.log ("FIZZBUZZ");
// }
// else if (isDivisibilePerQuindici) {
//     console.log ("BUZZ");
// }
// else if (isDivisibilePerTre) {
//     console.log ("FIZZ");
// }




const numeroInStringa = prompt('inserisci un numero');

const numero = parseFloat(numeroInStringa);

const isDivisibilePerTre = numero % 3 === 0;

const isDivisibilePerCinque = numero % 5 === 0;

let result = '';

if (isDivisibilePerTre) {
    result = result + 'FIZZ';
}
if (isDivisibilePerCinque) {
    result = result + 'BUZZ';
}
console.log(result);


