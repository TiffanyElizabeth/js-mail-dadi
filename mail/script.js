/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON POTETE UTILIZZARE NESSUN METODO COME:
- includes
- indexOf
- find
- search
- ecc... */

// 1. crea una lista con le email che possono accedere
const permittedEmails = [
    "anna@gmail.com",
    "fred@outlook.com",
    "luke@yahoo.com",
    "eliza@msn.com"
];

// 2. prompt: chiede all'utente la sua email
const userEmail = prompt("Inserisca la Sua email");

// 3. controlla se l'email inserita è presente nella lista (loop)
let isEmailPermitted = false;

for(let i = 0; i < permittedEmails.length; i++) {
    const currentEmail = permittedEmails[i];
    if(currentEmail === userEmail) {
        isEmailPermitted = true;
    }
}

// 4. informa l'utente se può accedere (se l'email è presente nella lista, l'utente può accedere, ALTIRMENTI l'utente non può accedere)

if (isEmailPermitted) {
    alert("Può accedere")
} else {
    alert("Non può accedere")
};