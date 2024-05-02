// // Логічні розгалуження:
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let  x = 0;
if (x!==0){
    console.log('Вірно');
}  else {
    console.log('Невірно');
}
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).

let  time = 30;
if (time > 0 && time <= 15) {
    console.log('першу частину години');
} else if (time >= 16 && time <= 30){
        console.log('другу частину години');
} else if (time >= 31 && time <= 45) {
    console.log('третю частину години');
} else if (time >= 46 && time <= 59) {
        console.log('четверту частину години');
}

// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15;
if (day > 1 && day <= 10) {
    console.log('першу ');
} else if (day >= 11 && day <= 20){
    console.log('другу');
} else if (day >= 21 && day <= 31) {
    console.log('третю');
}
// // - Скласти розклад на тиждень за домопоги switch.
// //     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let  schedule = +prompt('Keep the serial number of the day of the week');
switch (schedule){
    case 1:
    console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}
// // - Користувач вводить або має два числа.
// //     Потрібно знайти та вивести максимальне число з тих двох .
// //     Також потрібно врахувати коли введені рівні числа.

// // варіант 1 рішення через ternary
let number1_1 = +prompt('Enter a number 1');
let number1_2 = +prompt('Enter a number 2');
let number = number1_1>=number1_2 ? number1_1 : number1_2;
console.log(number);

// // варіант 2 рішення через if
let number2_1 = +prompt('Enter a number 1');
let number2_2 = +prompt('Enter a number 2');
if (number2_1>number2_2){
    console.log(number2_1);
} else if (number2_1<number2_2){
console.log(number2_2);
} else if (number2_1===number2_2){
    console.log(number2_1);
}

// // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// // варіант рішення 1
let xx = false;
if(!xx){
    console.log('default');
}
// // варіант рішення 2
let xxx = null;
xxx = xxx || 'default';
console.log(xxx);

// // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// //     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5){
    console.log('Супер');
} else {
    console.log('Погано')
}
if (coursesAndDurationArray[1].monthDuration >= 5){
    console.log('Супер');
} else {
    console.log('Погано')
}
if (coursesAndDurationArray[2].monthDuration >= 5){
    console.log('Супер');
} else {
    console.log('Погано')
}
if (coursesAndDurationArray[3].monthDuration >= 5){
    console.log('Супер');
} else {
    console.log('Погано')
}
if (coursesAndDurationArray[4].monthDuration >= 5){
    console.log('Супер');
} else {
    console.log('Погано')
}
if (coursesAndDurationArray[5].monthDuration >= 5){
    console.log('Супер');
} else {
    console.log('Погано')
}