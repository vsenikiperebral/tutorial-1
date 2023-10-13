// const numbers = [
//     ...[1, 2, 3], 4, 5];
// console.log(numbers);



// const temps = [18, 14, 12, 21, 17, 29, 24];

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [];

//===========================================

// const playlist = {
//     name: 'My Playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// const {
//     rating,
//     tracks,
//     name,
//     trackCount: numberOfTracks = 0,
//     author = 'user',
// } = playlist;

// console.log(numberOfTracks);

//===========================================

// const profile = {
//     name: 'Klim',
//     tag: 'Klimmy',
//     location: 'Kiev',
//     avatar: 'My avatar',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location: loc, avatar, stats: {followers, views, likes} } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);
// console.log(avatar);

//================================================

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

//===============================================


// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));

// const keys = Object.keys(authors);

// for (const key of keys) {
//     console.log(key);
//     console.log(authors[key]);

// const entries = Object.entries(authors);

// console.log(entries);

// for (const [name, rating] of entries) {

    // 2. const [name, rating] = entry;
    
    // 1. const name = entry[0];
    // const rating = entry[1];

    // console.log(name, rating);

//=======================================

// const profile = {
//     name: 'Klim',
//     tag: 'Klimmy',
//     loc: 'Kiev',
//     avatar: 'My avatar',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {name, tag, loc, ...restProps} = profile;

// console.log(name, tag, loc);
// console.log(restProps);

//======================================

const showProfileInfo = function(userProfile) {
    const {name, tag, loc, avatar, ...restProps} = userProfile;
    console.log(name, loc, tag, avatar);
    console.log(restProps);
};

const profile = {
        name: 'Klim',
        tag: 'Klimmy',
        loc: 'Kiev',
        avatar: 'My avatar',
        stats: {
            followers: 5603,
            views: 4827,
            likes: 1308,
        },
    };

showProfileInfo(profile);

// const fn = function (params) {};

// fn({
//     age: 10,
//     friends: 5,
//     isOnline: true,
//     hobbies: [],
//     games: {},
//     rating: 6,
// });









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

// const friends = [
//     {name: 'Mango', online: 'false'},
//     {name: 'Kiwi', online: 'true'},
//     {name: 'Poly', online: 'true'},
//     {name: 'Ajax', online: 'false'},
// ]

// console.log(friends);

// for (const friend of friends) {
//     console.log(friend.name);
//     console.log(friend.online);

//     friend.newProp = 555;
// }
// console.table(friends);

// const findFriendByName = function(allFriends, friendName) {
// for (const friend of allFriends) {
//     if(friend.name === friendName) {
//         return 'НАШЛИ!'
//     }
// }
// return 'НЕ НАШЛИ :('
// }

// console.log(findFriendByName(friends, 'Kiwi'));
// console.log(findFriendByName(friends, 'Chelsy'));

//================================================

// const getAllNames = function(allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//     console.log(friend.name);
//     names.push(friend.name);
//     }
//     return names;
// }

// console.log(getAllNames(friends));

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

