//МАССИВЫ

// const a = [1, 2, 3];
// const b = a;
// console.log(a);
//  console.log(b);

//  a[0] = 500;

//  console.log(a);
//  console.log(b);

//  console.log(a === b);


const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.table(clients);
const lastIndex = clients.length - 1;

for (i = 0; i <= lastIndex; i += 1) {
  console.table(clients);
  clients[i] += '-1';
}

for (const client of clients) {
  console.log(client);
}


// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const lastIndex = clients.length - 1;
// console.log(lastIndex); 

// clients[1] = 'Kivi';
// console.table(clients);


// ========================================