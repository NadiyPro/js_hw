// // - зробити файл users.html
// // з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//  //   вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// // при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// // отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

window.onload=function () {
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('detailsDiv');
    document.body.append(detailsDiv);

    let urlGet = (id)=>'js_hw/lesson11/user-details.html?id='+id;
    console.log(urlGet)

    const url = new URL('window.location.search')
    console.log(url)
    //
}

// fetch('user-details.html?id=${idDetail}')
//     .then((response)=>response.json())
//     .then((idDetail)=>console.log(idDetail))