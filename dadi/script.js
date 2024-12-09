/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

// 1. genera un numero randomico (da 1 a 6) per il giocatore
const userRoll = Math.floor(Math.random() * 6) + 1;

// 2. stampa il numero generato per il giocatore (console & alert)
console.log(userRoll);
alert("Il tuo numero è " + userRoll);

// 3. genera un numero randomico (da 1 a 6) per il computer
const computerRoll = Math.floor(Math.random() * 6) + 1;

// 4. stampa il numero generato per il computer (console)
console.log(computerRoll);

// 5. se il numero del giocatore è > del numero del computer, ha vinto il giocatore; altrimenti se il numero del computer è > del numero del giocatore, ha vinto il computer; altrimenti i numeri sono uguali
if (userRoll > computerRoll) {
    alert("Hai vinto!")
} else if (userRoll < computerRoll) {
    alert("Hai perso")
} else {
    alert("È un pareggio!")
}
