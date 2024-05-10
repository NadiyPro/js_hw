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
function primitiveArr (...primitiveValue) {
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
primitiveArr(...arrValue);
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
