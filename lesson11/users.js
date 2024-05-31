// // - зробити файл users.html
// // з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//  //   вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// // при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// // отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
const basicDiv = document.createElement('div');
basicDiv.classList.add('basicDivDiv');
document.body.append(basicDiv);
fetch('http://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>console.log(users))

fetch('http://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>{
            for(let user of users){
               const userDiv = document.createElement('div');
                userDiv.classList.add('userDiv');
                const idid= user.id;
                userDiv.innerHTML = `<p>id: ${idid} <br> name: ${user.name} </p>`
                const userA = document.createElement('a');
                userA.classList.add('userA');
                userA.innerHTML =`user-details`
                userA.href =`js_hw/lesson11/user-details.html?id=${user.id}`
                basicDiv.append(userDiv);
                userDiv.append(userA);
            }
    }
    )