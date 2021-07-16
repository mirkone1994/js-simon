var numbers = [];
var userNumbers = [];
var askNumber;
var result = 0;
for (i=0; i<5; i++) {
    var randomNumbers = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumbers);
}
alert(numbers);
setTimeout(function(){
    for (i=0; i<5; i++) {
        askNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
        userNumbers.push(askNumber); 
        if (numbers[i] == userNumbers[i]) {
            result++;
            console.log(numbers);
            console.log(userNumbers);
        } else result + 0;
        console.log(result);
    }
    console.log(userNumbers);
    console.log(result);
}, 3000);
console.log(numbers);


