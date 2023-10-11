


//МАССИВЫ

// const a = [1, 2, 3];
// const b = a;
// console.log(a);
//  console.log(b);

//  a[0] = 500;

//  console.log(a);
//  console.log(b);

//  console.log(a === b);



//ДЛИНА МАССИВА
//====================================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.table(clients);

// const lastIndex = clients.length - 1;


//ПЕРЕЗАПИСЬ ЕЛЕМЕНТА МАССИВА
//====================================

// for (i = 0; i <= lastIndex; i += 1) {
//   console.table(clients);
//   clients[i] += '-1';
// }


//СУММА ЕЛЕМЕНТОВ МАССИВА
//====================================

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const item of cart) {
//   console.log(item);
//   total += item;
// }

// console.log('Total:', total);

//СУММА ЕЛЕМЕНТОВ МАССИВА C ИЗМЕНЕНИЕМ КАЖДОГО ЕЛЕМЕНТА
//====================================

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 0.75)
//   total += cart[i];
// }

// console.log(cart);
// console.log('Total:', total);

//СУММА ЧЕТНЫХ ЧИСЕЛ МАССИВА
//====================================
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

//  for (const item of cart) {
//   if (item % 2 === 0) {
//     console.log(`${item} - четное`);
//     total += item;
//   }
//  }
//  console.log(total);

 // for (let i = 0; i < cart.length; i += 1) {
//   if (cart[i] % 2 !== 0) {
//     console.log(cart[i], 'Нечетное!!!');
//   } else {
//     total += cart[i];
//   }
// }
//  console.log(total);


//ПОИСК ЛОГИНА В МАССИВЕ (Тернарник и Перебор)
//========================================

// const logins = ["Mango", "Ajax", "Poly", "Kiwi"];
// const loginToFind = 'Poly';
// let message = `Пользователь ${loginToFind} не найден.`;
// console.table(logins);

// logins.includes(loginToFind) ? message = `Пользователь ${loginToFind} найден.` : message;
// console.log(message);

//ПОИСК САМОГО МАЛЕНЬКОГО ЧИСЛА
//============================================

// const numbers = [54, 28, 105, 70, 92, 17, 120];
// let minNumber = numbers[0];

// console.log(numbers);

// for (const number of numbers) {
//   if (number < minNumber) {
//     minNumber = number;
//   }
// }
// console.log(minNumber);


//ПОИСК САМОГО БОЛЬШОГО ЧИСЛА
//============================================

// const numbers = [54, 28, 105, 70, 92, 17, 120];
// let maxNumber = numbers[0];

// console.log(numbers);

// for (const number of numbers) {
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
// }
// console.log(maxNumber);


//ОБЪЕДИНЕНИЕ СТРОК ИЗ МАССИВА
//============================================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.table(clients);

// const string = clients.join(', ');
// console.log(string);


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.table(clients);

// let string = '';

// for (const client of clients) {
//   string += client + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);


// ЗАМЕНА РЕГИСТРА КАЖДОЙ БУКВЫ
//============================================

// const string = 'JavaScript';
// const letters = string.split('');
// let invertString = '';

// for (const letter of letters) {
//   letter === letter.toUpperCase()
//   ? invertString += letter.toLowerCase() 
//   : invertString += letter.toUpperCase();
// }
// console.log(string);
// console.log(invertString);


// СЛАГ ИЗ СЛОВ
//============================================

// const title = 'Top 10 benefits of React framework';
// const normTitle = title.toLowerCase();

// console.log(normTitle);

// wordsSlug = title.toLowerCase().split(' ').join('-');
// console.log(wordsSlug);

// const title = 'Top 10 benefits of React framework';
// const normTitle = title.toLowerCase();

// console.log(normTitle);

// words = normTitle.split(' ');
// wordsSlug = words.join('-');
// console.log(wordsSlug);


// СУММА ЕЛЕМЕНТОВ ДВУХ МАССИВОВ
// ===========================================

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// console.log(numbers);

// for (const number of numbers) {
// total += number;
// }
// console.log(total);


// УДАЛЕНИЕ ЕЛЕМЕНТОВ ПО ИНДЕКСУ
// ===========================================

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);

// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// cards.splice(2, 0, 20, 30, 40 );
// console.table(cards);

// 


// const string = 'JavaScript';
// const letters = string.split('');
// let invertString = '';

// for (const letter of letters) {
//   if (letter === letter.toUpperCase()) {
//     invertString += letter.toLowerCase();
//   }
//   else {
//     invertString += letter.toUpperCase();
//   }
// }
// console.log(string);
// console.log(invertString);








// const lastIndex = clients.length - 1;

// const logins = ["Mango", "Ajax", "Poly", "Kiwi"];
// const loginToFind = 'Poly';
// let message = `Пользователь ${loginToFind} не найден.`;
// console.table(logins);

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`
//     break;
//   }
// }
// console.log(message);



//РАЗБИТИЕ СТРОКИ НА БУКВЫ
//========================================

// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }

// clients[1] = 'Kivi';
// console.table(clients);


// ========================================