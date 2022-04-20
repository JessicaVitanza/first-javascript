//chiedo all'utente di inserire un numero 
//se il numero è divisibile per 3, scrivo in console FIZZ
//se il numero è divisibile per 5, scrivo in console BUZZ
//se il numeroè divisibile per entrambi, scrivo in console FIZZBUZZ

// prompt("inserire un numero");

const numero = parseFloat(prompt("inserire un numero"));

const divisibilePerTre = numero % 3 === 0

const divisibilePerCinque = numero % 5 === 0

const divisibilePerQuindici = numero % 15 === 0


if (divisibilePerTre) {
    console.log ("FIZZ");
}

if (divisibilePerCinque) {
    console.log ("BUZZ");
}

if (divisibilePerQuindici) {
    console.log ("FIZZBUZZ");
}
