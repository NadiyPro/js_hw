// // є масив
// // let users = [
// //     {name: 'vasya', age: 31, status: false},
// //     {name: 'petya', age: 30, status: true},
// //     {name: 'kolya', age: 29, status: true},
// //     {name: 'olya', age: 28, status: false},
// //     {name: 'max', age: 30, status: true},
// //     {name: 'anya', age: 31, status: false},
// //     {name: 'oleg', age: 28, status: false},
// //     {name: 'andrey', age: 29, status: true},
// //     {name: 'masha', age: 30, status: true},
// //     {name: 'olya', age: 31, status: false},
// //     {name: 'max', age: 31, status: true}
// // ];
// // за допомоги циклу вивести:
// //     - користувачів зі статусом true
// // - користувачів зі статусом false
// // - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// //     - користувачів зі статусом true
for (let i=0;i<users.length;i++){
    if (users[i].status===true){
       console.log(users[i])
    }
}
// // - користувачів зі статусом false
for (let i=0;i<users.length;i++){
    if (users[i].status===false){
        console.log(users[i])
    }
}
// // - користувачів які старші за 30 років
for (let i=0;i<users.length;i++){
    if (users[i].age>=30){
        console.log(users[i])
    }
}
