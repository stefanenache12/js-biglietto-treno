const km = prompt('Inserisci i Kilometri che vuoi percorerre');
const age= prompt('Inserisci la Tua età');
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

document.getElementById('ticket-price').innerHTML = finalPrice.toFixed(2) + ' Euro';