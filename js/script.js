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
console.log(numeri);

// 2 - alert con i 5 numeri 
alert(numeri);

// 3 - faccio partire il timer di 30 secondi dopo l'alert.
// salvo in una variabile i secondi di partenza
setTimeout(function(){
    var seconds = 5;
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
}, 1000);




