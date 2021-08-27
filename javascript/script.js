//Snack 1

/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */

// Con ciclo for
 let somma = 0; 

 for(let i = 0; i < 5; i++){

    numero = parseInt(prompt("Inserisci numero."));  
    somma =  somma + numero;  
 }
 
 console.log("Somma con ciclo for: " + somma);
 
 // Con ciclo while
 somma = 0;
 
 let j = 0;
 while(j < 5){  
    numero = parseInt(prompt("Inserisci numero.")); 
    somma =  somma + numero;
    
    j++;
 }
 console.log("Somma con ciclo while: " + somma);