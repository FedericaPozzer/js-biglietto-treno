// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km (0.21 € al km).
// Va applicato uno sconto del 20% per i minorenni.
// Va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// CHIEDI IL NUMERO DI KM
// CHIEDI ETA' PASSEGGERO

// CALCOLA COSTO BIGLIETTO

// SE UNDER 18 APPLICA SCONTO 40%
// SE OVER 65 APPLICA SCONTO 40%

// NON HO CAPITO LA COSA DELLA FORMA UMANA


let travel_km = parseFloat(prompt("quanti km vuoi percorrere?"));
let passenger_age = parseInt(prompt("quanti anni hai?"));
// console.log(travel_km + passenger_age);

let ticket_cost = parseFloat((travel_km * 21) / 100);
console.log(ticket_cost);
