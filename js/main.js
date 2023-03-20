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
// const numberOfFilms = +prompt(`Сколько фильмов вы посмотрели?`, ` `);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt(`Один из последних просмотренных фильмов`, ``),
//     b = prompt(`на сколько вы его оцените`,``),
//     c = prompt(`Один из последних просмотренных фильмов`,``),
//     d = prompt(`на сколько вы его оцените`,``);

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);
//Урок 18 - условия
// if (4 == 4) {
//      console.log(`ok!`);
// } else {
//     console.log(`Error`);
// };


// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('ok') : console.log('error');

// const num = 50;
// switch (num) { 
//     case 49:
//         console.log('неверно');
//         break;
//     case 100:
//         console.log('неверно');
//         break;
//     case 51:
//         console.log('ok');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }

//Урок 19 (Логические операторы)
// const hamburget = true;
// const fries = true;

// if (hamburget && fries) {
//     console.log('я сыт!');
// }
// console.log((hamburget && fries));


// const hamburget = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburget === 3 && cola && fries);

// console.log(1 && 1);
// console.log(1 && 5);
// console.log(null && 0); 
// console.log(0 && 'fsfasfa');


// if (hamburget ===3 && cola === 1 && fries) {
//     console.log('все сыт!');
// } else {
//     console.log('мы уходим!');

// const hamburget = 3;
// const fries = 1;
// const cola = 0;
// const nuggets = 2;

// if (hamburget === 3 && cola === 2 || fries === 1 && nuggets) {
//         console.log('все довольны!');
//     } else {
//         console.log('мы уходим!'); 
//     };

//     let johnReport, alexReport, samReport, mariaReport = 'done';
//     console.log(johnReport || alexReport || samReport || mariaReport);

//     console.log(!0);

    
//     let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }
//Урок 20 Циклы
// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i <= 8; i++) {
//     console.log(num);
//     num++;
// }
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue; 
//     }
//     console.log(i);
// }

//Урок 21
// for ( let i = 0; i < 3; i++ ) {
//     console.log(i);
//     for ( let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }; 
// console.log(result);
//Практическое задание 1.1
// 'use strict'
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Один из последних просмотренных фильмов', ''),
//     b = prompt('на сколько вы его оцените?', ''),
//     c = prompt('Один из последних просмотренных фильмов', ''),
//     d = prompt('на сколько вы его оцените?', '');

// // const a, b, c, d = fiveLetters

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// for ( let i = 0; i < 2; i++) {
//    const a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('на сколько вы его оцените?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//     } else { 
//         console.log('error!');
//         i--;
//     }
// }
// }

// console.log(personalMovieDB);
/////////////////My Work
// const a = 10;

// if ( a == 10 ) {
//     alert('Верно!');
// } else {
//     alert('Неверно');
// }
// //
// 'use strict'
// const min = 38;
// if (min >= 0 && min <= 14) {
//     alert('в первуй четверть часа!');
// }
// if (min >= 15 && min <= 30) {
//     alert('во вторую четверть часа!');
// }
// if (min >= 31 && min <= 44) {
//     alert('в третью четверть часа!');
// }
// if (min >= 45 && min <= 59) {
//     alert('4/4');
// }

