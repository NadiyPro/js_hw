// // 1. Створити пустий масив та :
let emptyArray = [];
// //a. заповнити його 50 парними числами за допомоги циклу.
for (let i=0; i < 50; i++){
    if(i % 2===0){
        emptyArray[emptyArray.length] = i;
    }
}
console.log(emptyArray);
// //b. заповнити його 50 непарними числами за допомоги циклу.
for (let i=0; i < 50; i++){
    if(i % 2!==0){
        emptyArray[emptyArray.length]= i;
    }
}
console.log(emptyArray);
//  //c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i=0; i < 20; i++){
    emptyArray[emptyArray.length] = Math.floor(Math.random()*100);
    }
console.log(emptyArray);
// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i=0; i < 20; i++){
    emptyArray[emptyArray.length] = Math.floor(Math.random()*732)+8;
}
console.log(emptyArray);
// // 2. Вивести за допомогою console.log кожен третій елемен
for (let i=0; i < emptyArray.length; i += 3){
    console.log(emptyArray[i]);
}
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i=0; i < emptyArray.length; i += 3){
    if(emptyArray[i] % 2===0){
        console.log(emptyArray[i]);
    }
}
// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let empty =[ ];
for (let i=0; i < emptyArray.length; i += 3){
    if(emptyArray[i] % 2===0){
        empty[empty.length] = emptyArray[i];

    }
}
console.log(empty);
// // 5. Вивести кожен елемент масиву, сусід справа якого є парним
// // EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let EXAMPLE = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i=0;i < EXAMPLE.length;i++){
    if((EXAMPLE[i+1]) % 2===0){
        console.log(EXAMPLE[i]);
    }
}
// // 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let price = [100,250,50,168,120,345,188];
let sum = 0;
let avr = 0;
for (let i=0;i < price.length;i++){
    sum += price[i];
    avr = sum / price.length;
}
console.log(avr);
// // 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomValue = [ ];
let arrayMultiply = [ ];
for(let i=0;i < 20;i++){
    randomValue[randomValue.length] = Math.floor(Math.random()*100);
    arrayMultiply[arrayMultiply.length] = randomValue[i] *5;
}
console.log(arrayMultiply);
// // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let otherValue = ['js', 3, true,'html',13,23];
let numberArray = [];
for (let i=0; i<otherValue.length;i++){
    if(+otherValue[i]&&otherValue[i]!==!!otherValue[i]){
        numberArray[numberArray.length] = otherValue[i];
    }
}
console.log(numberArray);
// // - Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
// //     let usersWithId = [
// //         {id: 1, name: 'vasya', age: 31, status: false},
// //         {id: 2, name: 'petya', age: 30, status: true},
// //         {id: 3, name: 'kolya', age: 29, status: true},
// //         {id: 4, name: 'olya', age: 28, status: false}
// //     ];
// //
// // let citiesWithId = [
// //     {user_id: 3, country: 'USA', city: 'Portland'},
// //     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// //     {user_id: 2, country: 'Poland', city: 'Krakow'},
// //     {user_id: 4, country: 'USA', city: 'Miami'}
// // ];
// //
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// // Example:
// //     let usersWithCities = [
// //         {
// //             id: 1, // <===
// //             name: 'vasya',
// //             age: 31,
// //             status: false,
// //             address: {
// //                 user_id: 1, // <===
// //                 country: 'Ukraine',
// //                 city: 'Ternopil'
// //             }
// //         },
// //         // TO BE CONTINUED .....
// //     ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
 let usersWithCities = [];
for ( let i=0; i<usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].adress = citiesWithId[j];
        }
    }
}
usersWithCities[usersWithCities.length] = usersWithId;
console.log(usersWithCities);
// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let pair = [ 1,2,3,4,5,6,7,8,9,10];
for (let i=0; i < pair.length; i ++){
    if(pair[i] % 2===0){
        console.log(pair[i]);
    }
}
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrayNumber = [ 11,12,13,14,15,16,17,18,19,20];
let arrayEmpty = [];
for (let i=0;i<arrayNumber.length; i++){
    arrayEmpty[arrayEmpty.length] = arrayNumber[i];
}
console.log(arrayEmpty);
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrayFor = [ 'a', 'b', 'c'];
let text = '';
for (let i=0; i<arrayFor.length; i++){
    text += arrayFor[i];
} console.log(text);
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let arrayWhile = [ 'a', 'b', 'c'];
let textWhile = '';
let j=0;
while ( j<arrayWhile.length){
    textWhile += arrayWhile[j];
    j++;
} console.log(textWhile);
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arrayForOf = [ 'a', 'b', 'c'];
let textForOf = '';
for (let k of arrayForOf){
    textForOf += k;
} console.log(textForOf);
// //