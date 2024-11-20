/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.


function getArrayInitilas (array){
   let initialsContainer = []
   for (let i = 0; i < array.length; i++){
      let initials = array[i].at(0);
      initialsContainer.push(initials);
   }

   return initialsContainer;
}
   


// Invoca la funzione qui e stampa il risultato in console
console.log(getArrayInitilas(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]