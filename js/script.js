// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km (0.21 € al km).
// Va applicato uno sconto del 20% per i minorenni.
// Va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// CHIEDI IL NUMERO DI KM
// CHIEDI ETA' PASSEGGERO

// CALCOLA COSTO BIGLIETTO

// SE UNDER 18 APPLICA SCONTO 20%
// SE OVER 65 APPLICA SCONTO 40%

// NON HO CAPITO LA COSA DELLA FORMA UMANA

// ---------------------------------------------------------

// DOMANDE
let travel_km = parseFloat(prompt("quanti km vuoi percorrere?"));
let passenger_age = parseInt(prompt("quanti anni hai?"));
// console.log(travel_km + passenger_age);
    document.getElementById("age").innerHTML = passenger_age;
    document.getElementById("km").innerHTML = travel_km;

// COSTO BIGLIETTO
let ticket_cost = parseFloat((travel_km * 21) / 100);
console.log(ticket_cost);


// CALCOLO SCONTI
    // calcolo il 20%
const discount_20 = (ticket_cost * 20) / 100;
console.log("sconto 20% " + discount_20);
    // calcolo il 40%
const discount_40 = (ticket_cost *40) / 100;
console.log("sconto 40% " + discount_40);
 

// APPLICO SCONTI
if (passenger_age <= 18) 
{
    let discount_under18 = (ticket_cost - discount_20).toFixed(2);
    console.log("siccome sei minorenne, paghi: " + discount_under18 + " €");
}
else if (passenger_age >= 65)
{
    let discount_over65 = (ticket_cost - discount_40).toFixed(2);
    console.log("siccome sei over 65, paghi: " + discount_over65 + " €");
}
else {
    console.log("non hai diritto a nessuno sconto, paghi: " + ticket_cost.toFixed(2) + " €");
}
//.toFixed(2) --> arrotondo a solo due decimali!
