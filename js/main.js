// let number = 4.6;

// console.log(4/0);
// console.log('string' * 9);

// const persone = 'Alex';
// console.log(persone);
// let arr = ['plum.jpg', 'orange.jpg', 3, 'applejuice.jpg'];
// console.log(arr[1]);

// const arrObj = {
//     a: 10,
//     b: 20,
// };
// console.log(arrObj);
// arrObj.c = '1234';
// console.log(arrObj['c']);
//alert('privet');

// const result = confirm('Are you here?');
// console.log(result);
// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);
// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
//Урок12 (интерполяция)
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);
// console.log('arr' + +"5");
//Урок13 (операторы)
// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr); 
// const isCheked = true,
//       isClose = true;
// console.log(isCheked || !isClose);
// function newContent() {
//     document.open();
//     document.write("<h1>Долой старое, хотим нове</h1>");
//     document.close();
// }
// let a = 5,
//     b = 10;
// console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// Моя версия Классной работы!
// let numberOfFilms = [0];
// numberOfFilms[0] = prompt(`Сколько фильмов вы посмотрели?`, ` `);
// console.log(numberOfFilms[`0`]);
// let personalMovieDB = {
//     count: numberOfFilms[0],
//     movies: { },
//     actors: { },
//     genres: [ ],
//     privat: false,
// };
// let lastFilmsWatched = [];
// lastFilmsWatched[0] = prompt(`Один из последних просмотренных фильмов`, ``);
// lastFilmsWatched[1] = prompt(`Один из последних просмотренных фильмов`,``);
// let filmsRate = [];
// filmsRate[0] = prompt(`на сколько вы его оцените`, ``);
// filmsRate[1] = prompt(`на сколько вы его оцените`, ``);
//Версия классной работы автора
const numberOfFilms = +prompt(`Сколько фильмов вы посмотрели?`, ` `);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt(`Один из последних просмотренных фильмов`, ``),
    b = prompt(`на сколько вы его оцените`,``),
    c = prompt(`Один из последних просмотренных фильмов`,``),
    d = prompt(`на сколько вы его оцените`,``);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);