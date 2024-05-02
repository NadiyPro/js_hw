// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let music = [
    'pop',
    'rock',
    'rap',
    'disco',
    'dance',
    'country',
    'classical music',
    'jazz',
    'hip hop',
    'rock-and-roll'
]
console.log(music[0]);
console.log(music[1]);
console.log(music[2]);
console.log(music[3]);
console.log(music[4]);
console.log(music[5]);
console.log(music[6]);
console.log(music[7]);
console.log(music[8]);
console.log(music[9]);


// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Go where it\'s scary. That is where you will find strength',
    pageCount: 382,
    genre: 'Self development'
}
let book2 = {
    title: 'Develop your brain',
    pageCount: 536,
    genre: 'Self development'
}
let book3 = {
    title: 'The principles of the first',
    pageCount: 249,
    genre: 'Self development'
}
console.log(book1,book2,book3);
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Go where it\'s scary. That is where you will find strength',
    pageCount: 382,
    genre: 'Self development',
    authors:{
        name: 'Jim Lawless',
        age: 57
    }
}
let book2 = {
    title: 'Develop your brain',
    pageCount: 536,
    genre: 'Self development',
    authors:{
        name: 'Joe Dispenza',
        age: 62
    }
}
let book3 = {
    title: 'The principles of the first',
    pageCount: 249,
    genre: 'Self development',
    authors:{
        name:
        age:
    }
}
console.log(book1,book2,book3);

// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача