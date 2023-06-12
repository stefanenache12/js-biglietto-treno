const km = prompt('Inserisci i kilometri che vuoi percorrere');
const age= prompt('Inserisci la tua età');
const kmPrice= 0.21;
const ticketPrice = km * kmPrice;

if (age < 18) {
    finalPrice = ticketPrice - ((ticketPrice * 20) / 100);
    document.getElementById('user-text').innerHTML = 'Congratulazioni, hai diritto a uno sconto del 20%!';
}
else if (age > 65) {
    finalPrice = ticketPrice - ((ticketPrice * 40) / 100);
    document.getElementById('user-text').innerHTML = 'Congratulazioni, hai diritto a uno sconto del 40%!';
}
else {
    finalPrice = ticketPrice;
    document.getElementById('user-text').innerHTML = 'Congratulazioni, stai prenotando al miglior prezzo!';
}


if (isNaN(age)) {
    alert("Si prega di inserire l'età");
}

if (isNaN(km)) {
    alert("Si prega di inserire la distanza in KM");
}

document.getElementById('ticket-price').innerHTML = 'Il Prezzo è ' + finalPrice.toFixed(2) + ' Euro';