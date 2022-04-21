//condizionali (IF)

// const numeroInStringa = prompt("inserisci il numero");

// const numero = parseFloat(numeroInStringa);

// //const numero = 8;

// const isEven = numero % 2 === 0;

// const isOdd = numero % 2 === 1;

// if (isEven) {
// console.log("il numero è pari");    
// } else {
// console.log("il numero è dispari");
// }

// if (isEven) { console.log("il numero è pari");} 
// else if (isOdd) { console.log("il numero è dispari");} 
// else { console.log("il numero non è ne pari ne dispari");}

//CALCOLATRICE

// const primoNumeroInStringa = prompt("inserisci il primo numero");

// const primoNumero = parseFloat(primoNumeroInStringa);

// const secondoNumeroInStringa = prompt("inserisci il secondo numero");

// const secondoNumero = parseFloat(secondoNumeroInStringa);

// const operazione = prompt("inserisci l'operazione, puoi inserire: '+', '-', 'x', ':'");

// const isAddizione = operazione === '+';

// const isSottrazione = operazione === '-';

// const isMoltiplicazione = operazione === 'x';

// const isDivisione = operazione === ':';

// if (isAddizione) { 
//     const risultato = primoNumero + secondoNumero;
//     console.log("risultato: " + risultato);
// } else if (isSottrazione) {
//     const risultato = primoNumero - secondoNumero;
//     console.log("risultato: " + risultato);   
// } else if (isMoltiplicazione) {
//     const risultato = primoNumero * secondoNumero;
//     console.log("risultato: " + risultato);
// } else if (isDivisione) {
//     const risultato = primoNumero / secondoNumero;
//     console.log("risultato: " + risultato);
// } else {
//     console.log("operazione non ammessa");
// }


const numero = 14;

const isDivisibilePerDue = numero % 2 === 0;

const isDivisibilePerTre = numero % 3 === 0;

const isDivisibilePerQuattro = numero % 4 === 0;

// if (isDivisibilePerDue) {
//     console.log ("il numero è divisibile pe due");
// } else if (isDivisibilePerTre) {
//     console.log ("il numero è divisibile per tre");
// } else if (isDivisibilePerQuattro) {
//     console.log ("il numero è divisibile per quattro");
// } else {
//     console.log ("il numero non è divisibile per nessuno dei divisori selezionati");
// }

// if (isDivisibilePerDue) {
//      console.log ("il numero è divisibile pe due");
// } 
// if (isDivisibilePerTre) {
//      console.log ("il numero è divisibile per tre");
// } 
// if (isDivisibilePerQuattro) {
//      console.log ("il numero è divisibile per quattro");
// }

if (isDivisibilePerDue || isDivisibilePerTre || isDivisibilePerQuattro){

if (isDivisibilePerDue) {
    console.log ("il numero è divisibile pe due");
} 
if (isDivisibilePerTre) {
    console.log ("il numero è divisibile per tre");
} 
if (isDivisibilePerQuattro) {
    console.log ("il numero è divisibile per quattro");
} 

} else {
    console.log ("il numero non è divisibile per nessuno dei divisori selezionati");
    }




const vocaleScelta = prompt('ciao, scegli una vocale');

switch (vocaleScelta) {
    case "a":
    console.log('a come alce');
    break;
    case "e":
    console.log('e come elefante');
    break;
    case "i":
     console.log('i come istrice');
    break;
     case "o":
    console.log('o come orso');
    break;
    case "u":
    console.log('u come upupa');
    break;
    default:
    console.log('torna a studiare!');
    break;
}

// const isA = vocaleScelta === 'a';
// const isE = vocaleScelta === 'e';
// const isI = vocaleScelta === 'i';
// const isO = vocaleScelta === 'o';
// const isU = vocaleScelta === 'u';

// if (isA) {
//     console.log('a come albicocca');
// } else if (isE) {
//     console.log('e come elefante');
// } else if (isI) {
//     console.log('i come istrice');
// } else if (isO) {
//     console.log('o come orso');
// } else if (isU) {
//     console.log('u come upupa');
// } else {
//     console.log('torna a studiare!')
// }





