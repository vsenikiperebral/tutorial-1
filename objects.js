
// const playlist = {
//     name: 'My Playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     changeName(newname) {
//         this.name = 'New Playlist'
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     },

//     updatedRating(newRating) {
//         this.rating = newRating
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },
// };

// console.log(playlist);

// playlist.changeName('New name');
// playlist.addTrack('Новый трек 1');
// playlist.addTrack('Новый трек 2');

// console.log(playlist.getTrackCount());

// playlist.updatedRating(3);

//=========================================

// const feedBack = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }

// let totalFeedback = 0;

// const keys = Object.keys(feedBack);
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedBack[key]);

//     totalFeedback += feedBack[key];
// }

// console.log(totalFeedback);

// const values = Object.values(feedBack);
// console.log(values);

// for (const value of values) {
//     totalFeedback += value;
// }
                                                                                                                                                              
// console.log(totalFeedback);

//======================================

const friends = [
    {name: 'Mango', online: 'false'},
    {name: 'Kiwi', online: 'true'},
    {name: 'Poly', online: 'true'},
    {name: 'Ajax', online: 'false'},
]

console.log(friends);

// for (const friend of friends) {
//     console.log(friend.name);
//     console.log(friend.online);

//     friend.newProp = 555;
// }
// console.table(friends);

const findFriendByName = function(allFriends, friendName) {
for (const friend of allFriends) {
    if(friend.name === friendName) {
        return 'НАШЛИ!'
    }
}
return 'НЕ НАШЛИ :('
}

console.log(findFriendByName(friends, 'Kiwi'));
console.log(findFriendByName(friends, 'Chelsy'));


// const propertyName = 'tracks';

// console.log(playlist.name);
// console.log(playlist.tracks);
// console.log(playlist[propertyName]);



//=============================================

// const username = 'Mango';
// const email = 'mango@gmail.com';

// const singupData = {
//     username: username,
//     email: email,
// };

// console.log(singupData);

//==========================================

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickerData);


// const a = { x: 1, y: 2};
// const b = a;

