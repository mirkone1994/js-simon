var numbers = [];
var userNumbers = [];
var correctNumbers = [];
var wrongNumbers = [];
var askNumber;
var result = 0;
for (i=0; i<5; i++) {
    var randomNumbers = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumbers);
}
alert("Ricordati i seguenti numeri e inseriscili nella finestra di dialogo che ti comparirà tra 30 secondi, per ogni numero che ti ricorderai, il tuo punteggio incrementerà di 1: " + numbers);
setTimeout(function(){
    for (i=0; i<5; i++) {
        do {
            askNumber = parseInt(prompt("Inserisci un numero da 1 a 100").trim());
        } while (isNaN(askNumber) || askNumber < 1 || askNumber > 100);
        userNumbers.push(askNumber); 
        if (numbers[i] == userNumbers[i]) { // ho optato per questa soluzione in quanto volevo considerare come parametro per il punteggio anche l'ordine dei numeri
            result++;
            correctNumbers.push(askNumber);
        } else {
            wrongNumbers.push(askNumber);
        }
    }
    alert("Hai totalizzato " + result + " punti; i numeri corretti sono: " + correctNumbers + " mentre quelli errati sono: " + wrongNumbers);
}, 30000);

