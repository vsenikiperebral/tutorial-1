//forEach ============================

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function(number) {
//     console.log('number', number);
// });

// console.log(numbers);

//map ===============================

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(function (number) {
//     console.log(number);
//     return number * 2;
// });

// console.log('doubledNums', doubledNums);

//Возврат имен из массива обьектов =======================

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, omline: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, omline: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, omline: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 72, omline: false},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, omline: true},
// ];

// console.table(players);

// const playerNames = players.map(player => player.name);
// const playerIds = players.map(player => player.id); 

// console.log('playerNames', playerNames);
// console.log('playerIds', playerIds);

//====================================================

// const res = players.map(player => {
//     return {
//         name: player.name,
//         online: player.online,
//     }
// });
// console.log('res', res);

//Деструктуризация предыдущего ==============

// const res = players.map(({name, online}) => ({
//     name,
//     online,
// }));

// console.log('res', res);

//Изменение свойства однотиптых объектов  ===============================

// const updatedPlayers = players.map(player => {
//     return {
//         ...player,
//         points: player.points * 1.1,

//     }});

// console.table(updatedPlayers);

// Изменение свойства одного обьекта =======================


// const updatePlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         console.log('Мы нашли кого нужно обновить');

//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//     }};
// return player;
// }
// );

// console.table(updatePlayers);

// Решение предыдущей через Тернарник  ==================

// const playerIdToUpdate = 'player-3';

// const updatePlayers = players.map(player => {
//         return playerIdToUpdate === player.id ? {...player,
//             timePlayed: player.timePlayed + 100,} : player;
// }
// );

// console.table(updatePlayers);

// Сокращаем еще предыдущее  =========================

// const playerIdToUpdate = 'player-3';

// const updatePlayers = players.map(player => playerIdToUpdate === player.id ? {...player,
//     timePlayed: player.timePlayed + 100,} : player,
// );

// console.table(updatePlayers);

// Фильтраци елементов filter  =====================

// const numbers = [5, 10, 15, 20, 25];

// const filteredNums = numbers.filter(number => {
//     console.log(number);

//     return number > 15;
// });
// console.log(filteredNums);

// Стрелками предыдущее ================================

// const numbers = [5, 10, 15, 20, 25];

// const filteredNums = numbers.filter(number => number > 15);
// console.log(filteredNums);

//Фильтр игроков по булю и по условию ================================

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 72, online: false},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
// ];

// const onlinePlayers = players.filter(player => player.online);
// console.log(onlinePlayers);

// const offlinePlayers = players.filter(player => !player.online);
// console.log(offlinePlayers);

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.log(hardcorePlayers);

//find поиск уникальных елементов

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number === 10);
// console.log(number);

//Поиск по id уникального елемента

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 72, online: false},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
// ];


// const playerIdToFind = 'player-3';
// const playerWithId = players.find(player => player.id === playerIdToFind);
// console.log(playerWithId);

// //Поиск по имени уникального елемента  =================================

// const playerNametoFind = 'Poly';
// const playerWithName = players.find(player => player.name === playerNametoFind);
// console.log(playerWithName);

//Посик по id через функцию  ===========================================

// const findPlayerById = (allPlayers, playerId) => {
// return allPlayers.find(player => player.id === playerId);
// };

// console.log(findPlayerById(players, 'player-1'));
// console.log(findPlayerById(players, 'player-4'));

//Array Prototipe, возвращает статус true или false  ============================

// const isAllOnline = players.every(player => player.online);
// console.log('isOnline:', isAllOnline);

// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline:', isAnyOnline);

//reduce перебирает и возвращает что угодно !!!  ================

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
// console.log('number', number);
// console.log('acc', acc);

//     return acc + number;
// }, 0);
// console.log(total);

// Сокращение пред ============================

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// // =======================================

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
// console.log(totalSalary);

//  ======================================

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 72, online: false},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
// ];

// const totalTimePlayed = players.reduce((totalTime, player) => totalTime + player.timePlayed, 0);
// console.log(totalTimePlayed);

// // Корзина товаров ==================================

// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
// console.log(totalAmount);

// sort - сортировка товаров  ========================

const tweets = [
    {id: '000', likes: 5, tags: ['js', 'nodejs']},
    {id: '001', likes: 2, tags: ['html', 'css']},
    {id: '002', likes: 17, tags: ['html', 'js', 'nodejs']},
    {id: '003', likes: 8, tags: ['css', 'react']},
    {id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
];

// собираем все теги из твитов

// const allTags = tweets.reduce((allTags, tweet) => {
// allTags.push(...tweet.tags);
// }, []);
// console.log(allTags);

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
    console.log(allTags);

// const tagStats = allTags.reduce((acc, tag) => {
//     // console.log(acc);

//     if(acc[tag]) {
//         acc[tag] += 1;
//         return acc;
//     }
//     acc[tag] = 1;
//     return acc;
// }, {});

// console.log(tagStats);

const tagsStats = allTags.reduce((acc, tag) => {
return {
...acc, 
[tag]: acc[tag] ? acc[tag] + 1 : 1,
};
}, {});
    
console.log(tagsStats);

// если свойство с ключем есть, увеличить его значение на 1
// если свойства с таким ключом нет, сделать и записать.








