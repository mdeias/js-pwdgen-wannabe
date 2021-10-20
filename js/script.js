
// inserire nome, cognome e colore preferito
// output: nomecognomecolore21

// inizializzo variabili con dati
// creo variabile con tutti i dati aggiungendo 21
// conto i caratteri

const firstname = prompt ("Qual'è il tuo nome?");
const surname = prompt ("Qual'è il tuo cognome?");
const color = prompt ("Qual'è il tuo colore preferito?");
const password = `${firstname}${surname}${color}21`; 

console.log(firstname);
console.log(surname);
console.log(color);
console.log(password);

document.getElementById("dati").innerHTML =
`
 ${firstname}${surname}${color}21 <br>
Lunghezza: ${password.length} caratteri
`;