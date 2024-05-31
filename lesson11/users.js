// // - зробити файл users.html
// // з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//  //   вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// // при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// // отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
const basicDivDiv = document.createElement('div');
basicDivDiv.classList.add('basicDivDiv');
document.body.append(basicDivDiv);
fetch('http://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>console.log(users))

fetch('http://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>{
            for(let user of users){
               const userDiv = document.createElement('div');
                userDiv.classList.add('userDiv');
                userDiv.innerHTML = `<p>id: ${user.id} <br> name: ${user.name} </p>`
                const userA = document.createElement('a');
                userA.innerHTML =`user-details`
                userA.href =`user-details.html?id=${user.id}`
                basicDivDiv.append(userDiv);
                userDiv.append(userA);
                // console.log(user.name)
            }
    }

    )