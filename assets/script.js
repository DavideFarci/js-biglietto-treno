/*
    chiedere all'utente il numero di km che vuole percorrere e l'età del passeggero
    calcolare il prezzo base del biglietto in base ai km 
    applicare lo sconto in base all'età
    stampare il prezzo finito con massimo due decimali 
*/

const numKM = parseInt(prompt("Quanti km vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

let KMprice = numKM * 0.21 ;
let finalKMprice = KMprice.toFixed(2);



if (age >= 18 && age <= 65) {
    document.getElementById("price").innerHTML = KMprice
}
if (age < 18) {
    let prezzoMinore = KMprice - (KMprice * 20 / 100);
    let finalPriceM = prezzoMinore.toFixed(2);
    document.getElementById("price").innerHTML = finalPriceM;
}
if (age > 65) {
    let prezzoOver = KMprice - (KMprice * 40 / 100);
    let finalPriceO = prezzoOver.toFixed(2);
    document.getElementById("price").innerHTML = finalPriceO;
}




