// homework 2
'use strict';

// 1. Преобразуйте присваивания для a, b и c для использования оператора /=, += ...

let a = 48;
let b = 108;
let c = 33;
let d = 74;

// Изменяй только код снизу

// a = a / 12;
a /= 12;

// b = b + 4;
b += 4;

// c = c * 11;
c *= 11;

// d = d - 45;
d -= 45;

// 2. Объедени строки в переменную myStr c помощью +=, а также с помощью `` в переменную myLiteralStr

/* const someAdjective = "Awesome";
let myStr = "Learning to code is ";

const myLiteralStr = `${myStr}${someAdjective}`;

myStr += someAdjective; */

// 3. Найди количество символов в переменной lastName и присвойте его lastNameLength.

/* let lastNameLength = 0;
const lastName = "Lovelace"; */

// Изменяй только код снизу

// lastNameLength = lastName.length;

// 4. Найди третий символ в переменной lastName и присвоить его firstLetterOfLastName. Также последний символ.

/* let thirdLetterOfLastName = "";
let lastLetterOfLastName = "";
const lastName = "Lovelace"; */

// Изменяй только код снизу
/* thirdLetterOfLastName = lastName[2];
lastLetterOfLastName = lastName[lastName.length - 1]; */

/* 5. Создайте функцию reusableFunction, которая печатает строку Hi World в консоль разработчика.
	Вызовите функцию. */

let reusableFunction = () => {
	console.log('Hi World');
}

reusableFunction()
