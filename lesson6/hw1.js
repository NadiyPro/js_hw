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
let arr = str.split();
console.log(arr);
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let iter = [10,8,-7,55,987,-1011,0,1050,0];
let mapIter = iter.map(value => `${value}`);
console.log(mapIter);
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// // let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortAsc = nums.toSorted((num1, num2)=>num1-num2);
console.log(sortAsc);
let sortDes = nums.toSorted((num1, num2)=>num2-num1);
console.log(sortDes);
