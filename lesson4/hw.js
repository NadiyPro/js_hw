// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a,b) {
    return a*b;
}
console.log(rectangle(10,5));
// // - створити функцію яка обчислює та повертає площу кола з радіусом r. Окружність = π × діаметр = 2 × π × радіус.
function round(r) {
    return 2*3.14*r;
}
console.log(round(8));
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r. S = 2πRH
function cylinder(r,h) {
    return 2*3.14*r*h;
}
console.log(cylinder(3,5));
// //- створити функцію яка приймає масив та виводить кожен його елемент
function arr (...x) {
    console.log(x);
}
arr(3,5,7,9,13);
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP (text) {
     document.write(
        `
        <div><p>${text}</p></div>
        `
    )
    return (createP);
}
createP('Lorem ipsum dolor sit amet');
// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list (textLi) {
    document.write(
        `
        <div>
            <ul>
            <li>${textLi}</li>
            <li>${textLi}</li>
            <li>${textLi}</li>
            </ul>
        </div>
        `
    )
    return (list);
}
list('Lorem ipsum dolor sit amet');
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listCount (textCount,count) {
    document.write (' <div><ul>')
    for (let i=0;i<count;i++){
        document.write(
            `
            <li>${textCount}</li>
            `
        )
    }
    document.write ('</ul></div>')
}
listCount('Lorem ipsum dolor sit amet',3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrValue = ['html',true,100,'js',true,100500];
function primitiveArr (primitiveValue) {
    document.write('<div><ul>')
    for (let i=0;i<primitiveValue.length;i++) {
        document.write(
            `
            <li>${primitiveValue[i]}</li>
            `
        )
    }
    }
    document.write ('</ul></div>')
primitiveArr(arrValue);
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ. Для кожного об'єкту окремий блок.
let objectItems = [
    {
        id:1,
        name:'Sergey',
        age: 34
    },
    {
        id:2,
        name: 'Nadia',
        age: 33
    },
    {
        id:3,
        name:'Nick',
        age: 35
    }
];
function iterator (objectValue){
    for (let i=0; i<objectValue.length;i++){
        for (const loop in objectValue[i]){
            document.write(
                `
                <div>${loop}: ${objectValue[i][loop]}</div>
                `
            )
        }
    }
}
iterator(objectItems);
// // - створити функцію яка повертає найменьше число з масиву
let arrNumber = [111,777,18,3,67,23,13,55];
// //варіант 1
function minNum1 (valueMin1){
    return console.log (Math.min(...valueMin1));
 }

minNum1(arrNumber);
// // варіант 2
function minNum2 (valueMin2){
    let min = valueMin2 [0];
    for(let i=0;i<valueMin2.length;i++){
        if(valueMin2[i]< min){
            min = valueMin2[i];
        }
    }
    return console.log (min);
}
minNum2(arrNumber);
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArr = [1,2,10,13,5];
function sum (valueSum){
    let sumResult = 0;
    for(let i=0;i<valueSum.length;i++){
        sumResult += valueSum[i];
    }
    return console.log (sumResult);
}
sum(sumArr);
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arrSwap = [11,22,33,44];
function swap(arrSwap,index1,index2){
    let newSwap  = arrSwap[index1];
    arrSwap[index1] = arrSwap[index2];
    arrSwap[index2] = newSwap;
    return arrSwap;

}
console.log(swap(arrSwap,1,3));
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencyValues = [
    {
        currency: 'USD',
        value: 40
    },
    {
        currency: 'EUR',
        value: 42
    }
];
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let i=0; i<currencyValues.length;i++){
        // console.log(currencyValues[i]);
        if(currencyValues[i].currency===exchangeCurrency){
             let sumVal = sumUAH / currencyValues[i].value;
          return  console.log (sumVal);
        }
        }
    }
exchange(10000,currencyValues,'USD')