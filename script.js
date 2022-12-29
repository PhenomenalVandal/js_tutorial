/*global console*/
// eslint-disable-line no-console
"use strict";

//  let number = 4.6;

//  const obj = {
// 	name: "John",
// 	age: 25,
// 	isMarried: false,
//  };

 //console.log(obj.name);
//  console.log(obj["name"]);

//  let arr = ["plum.png", "orange.jpg", "apple.bmp"];

// const answers = [];
// answers[0] = prompt('Name', '');
// answers[1] = prompt('Last Name', '');
// answers[2] = prompt('How old are you?', '');

// console.log(typeof(answers));

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
      a = prompt('Один из последних просмотренных фильмов?', '');
const rating = +prompt('На сколько оцените его?', ''),
      b = +prompt('На сколько оцените его?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

personalMovieDB.movies[lastFilm] = rating;
personalMovieDB.movies[a] = b;

console.log(personalMovieDB);