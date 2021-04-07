// Descrizione: Un alert() espone 5 numeri generati casualmente. 
// Da li parte un timer di 30 secondi. 
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1 - 5 numeri generati casualmente e salvati in un array
var numeri = [];

while (numeri.length < 5) {
    var numeroCasuale = Math.floor(Math.random() * (20-1) + 1);

    // controllo che i numeri casuali non si ripetano 
    if (numeri.includes(numeroCasuale) == false) {
        numeri.push(numeroCasuale);
    }
}

// 2 - alert con i 5 numeri 
alert(numeri);

// 3 - deve partire il timer di 30 secondi
var seconds = 10;
var secondsElement = document.getElementById('seconds');

// salvo in una variabile il countdown
var countdown = setInterval(function(){
    // devo popolare l'elemento html ogni secondo 
    secondsElement.innerHTML = seconds;
    seconds--;

    // quando arriva a 0 si deve fermare 
    if (seconds === 0) {
        clearInterval(countdown);
        secondsElement.innerHTML = "tempo scaduto!";
    }
    
}, 1000);

// 4 - dopo 30 secondi chiedo i numeri all'utente
setTimeout(function(){
    
    var numeriIndovinati = [];

    for (var i = 0; i < 5; i++) {
        var numUtente = parseInt(prompt("Dimmi il numero"));
        
        // metto a confronto il numero dell utente con quelli presenti nell array di numeri casuali 
        if (numeri.includes(numUtente)) {
            numeriIndovinati.push(numUtente);
        }
    }

    // stampo i risultati 

    document.getElementById('numeri').innerHTML = numeri;
    document.getElementById('numeri-indovinati').innerHTML = numeriIndovinati;
    // console.log("numeriIndovinati", numeriIndovinati);

    // popolo html con il risultato della partita 
    if (numeriIndovinati.length == numeri.length) {
        document.getElementById('risultato-partita').innerHTML = "Hai vinto!"
    } else {
        document.getElementById('risultato-partita').innerHTML = "Hai perso!"
    }

}, 10000);