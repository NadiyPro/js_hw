// //- Знайти та вивести довижину настипних стрінгових значень
// //'hello world', 'lorem ipsum', 'javascript is cool'
let stringValue = ['hello world', 'lorem ipsum', 'javascript is cool'];
stringValue.forEach(value => console.log(value.length));
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
let stringUpper = ['hello world', 'lorem ipsum', 'javascript is cool'];
stringValue.forEach(value => console.log(value.toUpperCase()));
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let stringLower = ['hello world', 'lorem ipsum', 'javascript is cool'];
stringValue.forEach(value => console.log(value.toLowerCase()));
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// //варіант 1
let str1 = ' dirty string   ';
let clean1 = str1.substring(1,12);
console.log(clean1);
// //варіант 2
let str2 = ' dirty string   ';
let clean2 = str2.trim();
console.log(clean2);
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні'];
let str = 'Ревуть воли як ясла повні';
let arr

