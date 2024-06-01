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

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('innerDiv');
    innerDiv.innerHTML = `<h3>${userId}</h3>`
    detailsDiv.append(innerDiv);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response)=>response.json())
    .then((user)=>console.log(user))

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response)=>response.json())
        .then((user)=>{
            innerDiv.innerHTML=`<h2>name: ${user.name} <br> username: ${user.username}</h2> <p>website: ${user.website} <br> phone: ${user.phone} <br> website: ${user.website}</p>`

            const divAddress = document.createElement('div');
            divAddress.innerHTML=`divAddress:`
            divAddress.innerHTML=`<p>address: <br> city: ${user.address.city} <br> street: ${user.address.street} <br> suite: ${user.address.suite} <br> zipcode: ${user.address.zipcode} <br> geo: lat ${user.address.geo.lat}, lng ${user.address.geo.lng}</p>`
            console.log(user.address.geo.lat, user.address.geo.lng)

            innerDiv.append(divAddress);

            }
        )

}

