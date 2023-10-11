
//ФУНКЦИЯ ПОДСЧЕТА КОРЗИНЫ
// ==========================================
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25 ,90];

// const calcTotalPrice = function (items) {
//     let total = 0;

//     for (const item of items) {
//         total += item;    
//         }
// return total;
// }

// const r1 = calcTotalPrice([1, 2, 3]);

// console.log(`Общая сумма покупок: ${r1}`);
// console.log(calcTotalPrice([5, 10, 15, 20]));
// console.log(calcTotalPrice([100, 200, 300]));
// ================================================

// ПЕРЕБОР И ЛОГИРОВАНИЕ МАССИВА
// ==========================================
// const logItems = (items) => {       
//     for (const item of items) {
//         console.log(item);
//     }
// }   

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);
// ==========================================

// ПОИСК ЛОГИНА В МАССИВЕ
// ==========================================

// const logins = ["Mango", "Ajax", "Poly", "Kiwi"];

// const findLogin = function(allLogins, loginToFind) {
// return allLogins.includes(loginToFind) 
// ? `Потьзователь ${loginToFind} найден.` 
// : `Потьзователь ${loginToFind} не найден.`
// };

// console.log(findLogin(logins, 'Poly'));
// console.log(findLogin(logins, 'Kuku'));
// console.log(findLogin(logins, 'Kiwi'));

// const logins = ["Mango", "Ajax", "Poly", "Kiwi"];

// const findLogin = function(allLogins, loginToFind) {
//  let message = `Потьзователь ${loginToFind} не найден`;

//  for (const login of logins) {
//     if(login === loginToFind) {
//         message = `Потьзователь ${loginToFind} найден`
//     }
//  }
//  return message;
// }

// console.log(findLogin(logins, 'Poly'));
// console.log(findLogin(logins, 'Kuku'));
// console.log(findLogin(logins, 'Kiwi'));
// ==========================================


// ПОИСК ЛОГИНА В МАССИВЕ
// ==========================================

const findSmallestNumber = function (numbers) {
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
} 
}
return smallestNumber;
};
console.log(findSmallestNumber([54, 28, 105, 70, 92, 17, 120]));


// ЗАМЕНА РЕГИСТРА БУКВ В СТРОКЕ
// ==========================================


// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertString = ''

//     for (const letter of letters) {
//     letter === letter.toUpperCase()
//     ? invertString += letter.toLowerCase() 
//     : invertString += letter.toUpperCase(); 
//     }
//     return invertString;
// }

const changeCase = function (string) {
    const letters = string.split('');
    let invertString = ''

    for (const letter of letters) {
        const isLowerCase = letter === letter.toLowerCase();
    
        invertString += isLowerCase 
        ? letter.toUpperCase() 
        : letter.toLowerCase();
    }
    return invertString;
}

console.log(changeCase('JavaScript'));
console.log(changeCase('mAnGO'));
console.log(changeCase('dfWRghTREW'));

//========================================

//АРГУМЕНТЫ
//=======================================







// logins.includes(loginToFind) ? message = `Пользователь ${loginToFind} найден.` : message;
// console.log(message);

// const add = function(x, y) {
//     console.log('Функция add');

//     return x + y;

// };

// const r1 = add(5, 3);

// console.log(r1);
// console.log(add(9, 1));

// ===========================================

// const fnA = function () {
//     console.log('Выполняется функция А');

//     fnB();
// }

// const fnB = function () {
//     console.log('Выполняется функция B');

//     fnC();
// }

// const fnC = function () {
//     console.log('Выполняется функция C');
// }

// fnA();



