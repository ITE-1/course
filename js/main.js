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
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// if (personalMovieDB.count < 10) {
//     console.log('просмотренно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('вы киноман!');
    
// }else {
//     console.log('произошла ошибка?');
// }

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
// function showFirstMessage() {
//     console.log('hello world!');

// }
// showFirstMessage();

// function calc(a, b) {
//     return (a + b );
// }
// console.log(calc(4, 3));
// console.log(calc(10, 5));

// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// let anotherNum = function ret() {
//     let num = 50;
//     return num;
// }
// console.log(ret());
// const calc = (a, b) => {
//      return a + b 
//     };
// console.log(calc(5, 10));


// let myTime = '4:20';
// for ( let i = 0; i < 1; i++) {
// const timeAgo = prompt('Сколько сейчас времени?', '');
// if (timeAgo == myTime) {
//     alert('Время накуриться!');
//     break;
// } else {
//     alert('Приходи попозже!');
//     i--;
// }
//}
// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr + amount;
// }
// function promotion(result) { 
//     console.log(result * discount);
// }
// promotion(convert(500, usdCurr));

// const res = convert (500, usdCurr);
// promotion(res);
// const str = "teSt";
// const arr = [1, 2, 4];
// console.log(arr.length);
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// const fruit = 'some fruit';
// console.log(fruit.indexOf('o'));

// const logg = 'Hello World!';
// console.log(logg.slice(6, 10));
// console.log(logg.slice(6));
// 'use strict'
// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// //

// function detectPersolnalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('просмотренно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('вы киноман!');
        
//     }else {
//         console.log('произошла ошибка?');
//     }
// }
// detectPersolnalLevel();


// function rememberMyFilms() { 
//     for ( let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', '').trim(),
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
// rememberMyFilms();

// function showMyDb (hidden) { 
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDb(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genres = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genres;
//     }

// }
// writeYourGenres();
//
// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500 );
// }

// function second() {
//     console.log(2);
// }
// first();
// second();
// //
// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('Я прошел этот урок!');
// }
// learnJS('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('test');
//     }
// };
// options.makeTest();
// delete options.name;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойств ${key} имеет значение ${options[key]}`);
//     }
// }
// console.log(Object.keys(options).length);
// const arr = [1, 2, 3, 6, 8];
// // console.log(arr);
// // //arr.push(10);
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);
// console.log(newNumbers);

// delete newNumbers.a;
// console.log(newNumbers);
// console.log(numbers);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// console.log(oldArray);
// console.log(newArray);
// newArray[1] = 'dsdsdsd';
// console.log(newArray);
// //
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);
// console.log(num);
//создание
// 'use strict'
// let str = "some";
// let strObj = new String(str);
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Say hello!');
//     }
// };
// const john = {
//     health: 100
// };
// john.__proto__ = soldier;
// console.log(john.armor);
// john.sayHello();
//////////////////////////////////////////
// 'use strict'
// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function()  {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     detectPersolnalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log('просмотренно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('вы киноман!');
            
//         }else {
//             console.log('произошла ошибка?');
//         }
//     },
    
//     rememberMyFilms: function() { 
//         for ( let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов', '').trim(),
//             b = prompt('на сколько вы его оцените?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         } else { 
//             console.log('error!');
//             i--;
//         }
//         }
//     },
//     showMyDb: function (hidden) { 
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleShowMyDb: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         }
//         else {personalMovieDB.privat = true;
//         }

//     },
//     writeYourGenres: function() {
//     for (let i = 1; i <= 3; i++) {
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         if ( genre === '' || genre == null) {
//             console.log('Введено не верно!'),
//             i--;
//         }
//         else {
//             personalMovieDB.genres[i - 1] = genre; 
//         }
       
//     }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`)
//         });
//     },
// };

// let switcher = null;
// if (switcher) {
//     console.log('working');
// }
// switcher = 1;
// if (switcher) {
//     console.log('working');
// }
'Use strict'
// let number = 5; debugger
// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;
// logNumber(); debugger
// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }

//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);


// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     hearts = document.querySelectorAll('.heart');
    

// // box.style.backgroundColor = 'red';
// // box.style.width = '400px';

// // btns[1].style.borderRadius = '0px',
// // btns[0].style.backgroundColor = 'red';

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'blue';
// // }

// // hearts.forEach(item => {
// //     item.style.backgroundColor = 'blue'; 
// // })

// // hearts[0].replaceWith(btns[0]);
// const div = document.createElement('div');
// div.classList.add('black');
// document.body.append(div);
// div.innerHTML = '<h1>hello world</h1>';
/////////////////
// function pow(x, n) {
//     let result = 1;
//     for(let i = 0; i < n; i++) {
//         result *=x;
//     }
//     return result;
// }
// pow(2, 1)
//////////////
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }
// factorial(5);
let students = {
    js : [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: [{
        name: 'Peter',
        progress: 20
    }, {
        name: 'Ann',
        progress: 18
    }],
    pro: [{
        name: 'Sam',
        progress: 10
    }]
};
function getTheTotalProgress(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for( let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }  
            
            } else {
                for (let subCourse of Object.values(data));
            }
        }
    }
    return total / students;

console.log(getTheTotalProgress(students));