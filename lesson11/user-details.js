// // - зробити файл users.html
// // з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//  //   вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// // при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// // отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

window.onload=function () {
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('detailsDiv');
    document.body.append(detailsDiv);

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id')

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response)=>response.json())
    .then((userId)=>console.log(userId))

}

