// // - зробити файл users.html
// // з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//  //   вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// // при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// // отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

// window.onload=function () {
//     const detailsDiv = document.createElement('div');
//     detailsDiv.classList.add('detailsDiv');
//     document.body.append(detailsDiv);
//
//     const urlParams = new URLSearchParams(window.location.search);
//     const userId = urlParams.get('id')
//
//     fetch('https://jsonplaceholder.typicode.com/users/userId')
//     .then((response)=>response.json())
//     .then((userId)=>console.log(userId))
//
// }

// Let an <a id="myAnchor" href="/en-US/docs/Location.search?q=123"> element be in the document
const anchor = document.getElementsByClassName("userA");
const queryString = anchor.search; // Returns:'?q=123'

// Further parsing:
const params = new URLSearchParams(queryString);
const id = parseInt(params.get('id')); // is the number 123
console.log(id)
// document.addEventListener('DOMContentLoaded', () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const userId = urlParams.get('id');
//
//     fetch('https://jsonplaceholder.typicode.com/users/userId')
//         .then((response)=>response.json())
//         .then((userId)=>console.log(userId))
// })