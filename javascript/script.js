//Snack 1

/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */

// Con ciclo for
/*
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
*/

 //Snack 2
/**
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */

const listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
const listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];


for(let i = 0; i < 8; i++){
    let n = Math.floor(Math.random() * listaNomi.length);
    let c = Math.floor(Math.random() * listaCognomi.length);
    
    document.getElementById("falsa_lista").innerHTML += "<li>" + listaNomi[n] + " " + listaCognomi[c] + "</li>";
}


//Snack 3
/**
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */

 const arrayDue = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan"];
 const arrayUno = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz"];
 
 
 while(arrayUno.length != arrayDue.length){
     if ( arrayUno.length < arrayDue.length){
        arrayUno.push((Math.floor(Math.random() * 1000)));
     } else if( arrayUno.length > arrayDue.length){
        arrayDue.push((Math.floor(Math.random() * 1000)));
     }
 }
 
 for(let i = 0; i<arrayUno.length; i++){
     document.getElementById("prima_lista").innerHTML += "<li>" + arrayUno[i] + "</li>";
     document.getElementById("seconda_lista").innerHTML += "<li>" + arrayDue[i] + "</li>";
 }