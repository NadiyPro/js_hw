// // Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// // Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let divCheckIn=document.createElement('div');
document.body.appendChild(divCheckIn);
let formCheckIn=document.getElementById('f1');
divCheckIn.append(formCheckIn);
let labelCheckIn0=document.getElementsByTagName('label')[0];
let nameCheckIn=document.getElementById('name');
let labelCheckIn1=document.getElementsByTagName('label')[1];
let surnameCheckIn=document.getElementById('surname');
let labelCheckIn2=document.getElementsByTagName('label')[2];
let ageCheckIn=document.getElementById('age');
let buttonCheckIn=document.getElementsByClassName('createButton')[0];
formCheckIn.append(labelCheckIn0,nameCheckIn,labelCheckIn1,surnameCheckIn,labelCheckIn2,ageCheckIn,buttonCheckIn);

buttonCheckIn.onclick=function (e) {
    e.preventDefault();
    let divMyCheck=document.createElement('div');
    divMyCheck.classList.add('divMyCheck');
    divMyCheck.innerHTML=`${nameCheckIn.value} ${surnameCheckIn.value} ${ageCheckIn.value}`
    formCheckIn.appendChild(divMyCheck);
}

// // є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let divNumber=document.createElement('div');
divNumber.classList.add('divNumber');
let numberN=localStorage.getItem('count') || 0;
if(!numberN){
    localStorage.setItem('count', JSON.stringify(numberN))
    divNumber.innerHTML=`${numberN}`
} else {
    let numberSum = JSON.parse(numberN);
    numberSum++;
    localStorage.setItem('count', JSON.stringify(numberSum));
    divNumber.innerHTML=`Кількість перезавантажень сторінки: ${numberSum}`
}
document.body.appendChild(divNumber);

// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// // Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// // Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let dateSessions = new Date();
let arraySessions =JSON.parse(localStorage.getItem('sessions') )|| [] ;
arraySessions.push(dateSessions);
localStorage.setItem('sessions', JSON.stringify(arraySessions));
// // зробити масив на 100 об'єктів та дві кнопки prev next
// // при завантажені сторінки з'являються перші 10 об'єктів.
// // При натисканні next виводяться настпні 10 об'єктів
// // При натисканні prev виводяться попередні 10 об'єктів
let divNext = document.createElement('div');
divNext.classList.add('divNext');
let divElements = document.createElement('div');
divElements.classList.add('divElements');
let nextBtn =document.createElement('button');
nextBtn.classList.add('nextBtn');
nextBtn.innerHTML='next'
let prevBtn =document.createElement('button');
prevBtn.classList.add('prevBtn');
prevBtn.innerHTML='prev'

// // обєкти забираю зі сховища, які сформувала в першому завдані name,surname,age
buttonCheckIn.addEventListener('click',function (){
    let arrayHundred=JSON.parse(localStorage.getItem('arrHundred')) || [ ];
    arrayHundred.push({nameCheckIn:`${nameCheckIn.value}`,surnameCheckIn:`${surnameCheckIn.value}`,ageCheckIn:`${ageCheckIn.value}`});
    localStorage.setItem('arrHundred', JSON.stringify(arrayHundred));
})
let arrHundred=[
    {
        "nameCheckIn": "Owen Ewing",
        "surnameCheckIn": "Hurst",
        "ageCheckIn": "15"
    },
    {
        "nameCheckIn": "Velma Bentley",
        "surnameCheckIn": "Lynn",
        "ageCheckIn": "46"
    },
    {
        "nameCheckIn": "Kyra Soto",
        "surnameCheckIn": "Meyer",
        "ageCheckIn": "24"
    },
    {
        "nameCheckIn": "Phoebe Riggs",
        "surnameCheckIn": "Bates",
        "ageCheckIn": "6"
    },
    {
        "nameCheckIn": "Sybill Brown",
        "surnameCheckIn": "Marquez",
        "ageCheckIn": "17"
    },
    {
        "nameCheckIn": "Uma Hebert",
        "surnameCheckIn": "Foreman",
        "ageCheckIn": "86"
    },
    {
        "nameCheckIn": "Donna Walton",
        "surnameCheckIn": "Harding",
        "ageCheckIn": "21"
    },
    {
        "nameCheckIn": "Xavier Dale",
        "surnameCheckIn": "Navarro",
        "ageCheckIn": "30"
    },
    {
        "nameCheckIn": "Amaya Hurst",
        "surnameCheckIn": "Howe",
        "ageCheckIn": "7"
    },
    {
        "nameCheckIn": "Kelsie Wheeler",
        "surnameCheckIn": "French",
        "ageCheckIn": "74"
    },
    {
        "nameCheckIn": "Caryn Bright",
        "surnameCheckIn": "Medina",
        "ageCheckIn": "100"
    },
    {
        "nameCheckIn": "Myles Frederick",
        "surnameCheckIn": "Henderson",
        "ageCheckIn": "26"
    },
    {
        "nameCheckIn": "Cade Maynard",
        "surnameCheckIn": "Graves",
        "ageCheckIn": "5"
    },
    {
        "nameCheckIn": "Brynne Guy",
        "surnameCheckIn": "Hurley",
        "ageCheckIn": "90"
    },
    {
        "nameCheckIn": "Gemma Price",
        "surnameCheckIn": "David",
        "ageCheckIn": "83"
    },
    {
        "nameCheckIn": "Sigourney Webb",
        "surnameCheckIn": "Stevens",
        "ageCheckIn": "42"
    },
    {
        "nameCheckIn": "Olga Wall",
        "surnameCheckIn": "Duran",
        "ageCheckIn": "15"
    },
    {
        "nameCheckIn": "Mariam Petersen",
        "surnameCheckIn": "Gray",
        "ageCheckIn": "85"
    },
    {
        "nameCheckIn": "Alden Nixon",
        "surnameCheckIn": "Cantu",
        "ageCheckIn": "43"
    },
    {
        "nameCheckIn": "Derek Snider",
        "surnameCheckIn": "Flowers",
        "ageCheckIn": "58"
    },
    {
        "nameCheckIn": "Derek Snider",
        "surnameCheckIn": "Flowers",
        "ageCheckIn": "58"
    },
    {
        "nameCheckIn": "Montana Mcconnell",
        "surnameCheckIn": "Holcomb",
        "ageCheckIn": "38"
    },
    {
        "nameCheckIn": "Oleg Ellis",
        "surnameCheckIn": "Benson",
        "ageCheckIn": "28"
    },
    {
        "nameCheckIn": "Blaze Henry",
        "surnameCheckIn": "Weber",
        "ageCheckIn": "100"
    },
    {
        "nameCheckIn": "Samuel Dale",
        "surnameCheckIn": "Mason",
        "ageCheckIn": "8"
    },
    {
        "nameCheckIn": "Lydia Sloan",
        "surnameCheckIn": "Sosa",
        "ageCheckIn": "25"
    },
    {
        "nameCheckIn": "Xenos Foley",
        "surnameCheckIn": "Ball",
        "ageCheckIn": "78"
    },
    {
        "nameCheckIn": "Xenos Foley",
        "surnameCheckIn": "Ball",
        "ageCheckIn": "78"
    },
    {
        "nameCheckIn": "Colby Hogan",
        "surnameCheckIn": "Mcintyre",
        "ageCheckIn": "31"
    },
    {
        "nameCheckIn": "Linus Wilcox",
        "surnameCheckIn": "Hodge",
        "ageCheckIn": "89"
    },
    {
        "nameCheckIn": "Summer Kramer",
        "surnameCheckIn": "Luna",
        "ageCheckIn": "43"
    },
    {
        "nameCheckIn": "Berk Davidson",
        "surnameCheckIn": "Baker",
        "ageCheckIn": "25"
    },
    {
        "nameCheckIn": "Aaron Sutton",
        "surnameCheckIn": "Guzman",
        "ageCheckIn": "45"
    },
    {
        "nameCheckIn": "Ciaran Dickson",
        "surnameCheckIn": "Hendrix",
        "ageCheckIn": "78"
    },
    {
        "nameCheckIn": "Jack Prince",
        "surnameCheckIn": "Marquez",
        "ageCheckIn": "30"
    },
    {
        "nameCheckIn": "Aretha Berg",
        "surnameCheckIn": "Rios",
        "ageCheckIn": "18"
    },
    {
        "nameCheckIn": "Carter Best",
        "surnameCheckIn": "Robbins",
        "ageCheckIn": "81"
    },
    {
        "nameCheckIn": "Paki Park",
        "surnameCheckIn": "Little",
        "ageCheckIn": "82"
    },
    {
        "nameCheckIn": "Kato Boyle",
        "surnameCheckIn": "Bennett",
        "ageCheckIn": "73"
    },
    {
        "nameCheckIn": "Justina Cortez",
        "surnameCheckIn": "Delacruz",
        "ageCheckIn": "42"
    },
    {
        "nameCheckIn": "Emerson Walls",
        "surnameCheckIn": "Tillman",
        "ageCheckIn": "83"
    },
    {
        "nameCheckIn": "Emerson Walls",
        "surnameCheckIn": "Tillman",
        "ageCheckIn": "83"
    },
    {
        "nameCheckIn": "Beatrice Griffin",
        "surnameCheckIn": "Mann",
        "ageCheckIn": "79"
    },
    {
        "nameCheckIn": "Raja Simon",
        "surnameCheckIn": "Woods",
        "ageCheckIn": "75"
    },
    {
        "nameCheckIn": "Bethany Rhodes",
        "surnameCheckIn": "Hale",
        "ageCheckIn": "40"
    },
    {
        "nameCheckIn": "Sylvester James",
        "surnameCheckIn": "Jacobs",
        "ageCheckIn": "46"
    },
    {
        "nameCheckIn": "Tanisha Horn",
        "surnameCheckIn": "Robbins",
        "ageCheckIn": "21"
    },
    {
        "nameCheckIn": "Kirby Clark",
        "surnameCheckIn": "Bolton",
        "ageCheckIn": "16"
    },
    {
        "nameCheckIn": "Mary Finch",
        "surnameCheckIn": "Noble",
        "ageCheckIn": "38"
    },
    {
        "nameCheckIn": "Ralph Barlow",
        "surnameCheckIn": "Finch",
        "ageCheckIn": "32"
    },
    {
        "nameCheckIn": "Brendan Shelton",
        "surnameCheckIn": "Sparks",
        "ageCheckIn": "5"
    },
    {
        "nameCheckIn": "Athena Bush",
        "surnameCheckIn": "Stuart",
        "ageCheckIn": "65"
    },
    {
        "nameCheckIn": "TaShya Little",
        "surnameCheckIn": "Bush",
        "ageCheckIn": "79"
    },
    {
        "nameCheckIn": "Owen Ewing",
        "surnameCheckIn": "Hurst",
        "ageCheckIn": "15"
    },
    {
        "nameCheckIn": "Velma Bentley",
        "surnameCheckIn": "Lynn",
        "ageCheckIn": "46"
    },
    {
        "nameCheckIn": "Kyra Soto",
        "surnameCheckIn": "Meyer",
        "ageCheckIn": "24"
    },
    {
        "nameCheckIn": "Phoebe Riggs",
        "surnameCheckIn": "Bates",
        "ageCheckIn": "6"
    },
    {
        "nameCheckIn": "Sybill Brown",
        "surnameCheckIn": "Marquez",
        "ageCheckIn": "17"
    },
    {
        "nameCheckIn": "Uma Hebert",
        "surnameCheckIn": "Foreman",
        "ageCheckIn": "86"
    },
    {
        "nameCheckIn": "Donna Walton",
        "surnameCheckIn": "Harding",
        "ageCheckIn": "21"
    },
    {
        "nameCheckIn": "Xavier Dale",
        "surnameCheckIn": "Navarro",
        "ageCheckIn": "30"
    },
    {
        "nameCheckIn": "Amaya Hurst",
        "surnameCheckIn": "Howe",
        "ageCheckIn": "7"
    },
    {
        "nameCheckIn": "Kelsie Wheeler",
        "surnameCheckIn": "French",
        "ageCheckIn": "74"
    },
    {
        "nameCheckIn": "Caryn Bright",
        "surnameCheckIn": "Medina",
        "ageCheckIn": "100"
    },
    {
        "nameCheckIn": "Myles Frederick",
        "surnameCheckIn": "Henderson",
        "ageCheckIn": "26"
    },
    {
        "nameCheckIn": "Cade Maynard",
        "surnameCheckIn": "Graves",
        "ageCheckIn": "5"
    },
    {
        "nameCheckIn": "Brynne Guy",
        "surnameCheckIn": "Hurley",
        "ageCheckIn": "90"
    },
    {
        "nameCheckIn": "Gemma Price",
        "surnameCheckIn": "David",
        "ageCheckIn": "83"
    },
    {
        "nameCheckIn": "Sigourney Webb",
        "surnameCheckIn": "Stevens",
        "ageCheckIn": "42"
    },
    {
        "nameCheckIn": "Olga Wall",
        "surnameCheckIn": "Duran",
        "ageCheckIn": "15"
    },
    {
        "nameCheckIn": "Mariam Petersen",
        "surnameCheckIn": "Gray",
        "ageCheckIn": "85"
    },
    {
        "nameCheckIn": "Alden Nixon",
        "surnameCheckIn": "Cantu",
        "ageCheckIn": "43"
    },
    {
        "nameCheckIn": "Derek Snider",
        "surnameCheckIn": "Flowers",
        "ageCheckIn": "58"
    },
    {
        "nameCheckIn": "Derek Snider",
        "surnameCheckIn": "Flowers",
        "ageCheckIn": "58"
    },
    {
        "nameCheckIn": "Montana Mcconnell",
        "surnameCheckIn": "Holcomb",
        "ageCheckIn": "38"
    },
    {
        "nameCheckIn": "Oleg Ellis",
        "surnameCheckIn": "Benson",
        "ageCheckIn": "28"
    },
    {
        "nameCheckIn": "Blaze Henry",
        "surnameCheckIn": "Weber",
        "ageCheckIn": "100"
    },
    {
        "nameCheckIn": "Samuel Dale",
        "surnameCheckIn": "Mason",
        "ageCheckIn": "8"
    },
    {
        "nameCheckIn": "Lydia Sloan",
        "surnameCheckIn": "Sosa",
        "ageCheckIn": "25"
    },
    {
        "nameCheckIn": "Xenos Foley",
        "surnameCheckIn": "Ball",
        "ageCheckIn": "78"
    },
    {
        "nameCheckIn": "Xenos Foley",
        "surnameCheckIn": "Ball",
        "ageCheckIn": "78"
    },
    {
        "nameCheckIn": "Colby Hogan",
        "surnameCheckIn": "Mcintyre",
        "ageCheckIn": "31"
    },
    {
        "nameCheckIn": "Linus Wilcox",
        "surnameCheckIn": "Hodge",
        "ageCheckIn": "89"
    },
    {
        "nameCheckIn": "Summer Kramer",
        "surnameCheckIn": "Luna",
        "ageCheckIn": "43"
    },
    {
        "nameCheckIn": "Berk Davidson",
        "surnameCheckIn": "Baker",
        "ageCheckIn": "25"
    },
    {
        "nameCheckIn": "Aaron Sutton",
        "surnameCheckIn": "Guzman",
        "ageCheckIn": "45"
    },
    {
        "nameCheckIn": "Ciaran Dickson",
        "surnameCheckIn": "Hendrix",
        "ageCheckIn": "78"
    },
    {
        "nameCheckIn": "Jack Prince",
        "surnameCheckIn": "Marquez",
        "ageCheckIn": "30"
    },
    {
        "nameCheckIn": "Aretha Berg",
        "surnameCheckIn": "Rios",
        "ageCheckIn": "18"
    },
    {
        "nameCheckIn": "Carter Best",
        "surnameCheckIn": "Robbins",
        "ageCheckIn": "81"
    },
    {
        "nameCheckIn": "Paki Park",
        "surnameCheckIn": "Little",
        "ageCheckIn": "82"
    },
    {
        "nameCheckIn": "Kato Boyle",
        "surnameCheckIn": "Bennett",
        "ageCheckIn": "73"
    },
    {
        "nameCheckIn": "Justina Cortez",
        "surnameCheckIn": "Delacruz",
        "ageCheckIn": "42"
    },
    {
        "nameCheckIn": "Emerson Walls",
        "surnameCheckIn": "Tillman",
        "ageCheckIn": "83"
    },
    {
        "nameCheckIn": "Emerson Walls",
        "surnameCheckIn": "Tillman",
        "ageCheckIn": "83"
    },
    {
        "nameCheckIn": "Beatrice Griffin",
        "surnameCheckIn": "Mann",
        "ageCheckIn": "79"
    },
    {
        "nameCheckIn": "Raja Simon",
        "surnameCheckIn": "Woods",
        "ageCheckIn": "75"
    },
    {
        "nameCheckIn": "Bethany Rhodes",
        "surnameCheckIn": "Hale",
        "ageCheckIn": "40"
    },
    {
        "nameCheckIn": "Sylvester James",
        "surnameCheckIn": "Jacobs",
        "ageCheckIn": "46"
    },
    {
        "nameCheckIn": "Tanisha Horn",
        "surnameCheckIn": "Robbins",
        "ageCheckIn": "21"
    },
    {
        "nameCheckIn": "Kirby Clark",
        "surnameCheckIn": "Bolton",
        "ageCheckIn": "16"
    },
    {
        "nameCheckIn": "Mary Finch",
        "surnameCheckIn": "Noble",
        "ageCheckIn": "38"
    },
    {
        "nameCheckIn": "Ralph Barlow",
        "surnameCheckIn": "Finch",
        "ageCheckIn": "32"
    },
    {
        "nameCheckIn": "Brendan Shelton",
        "surnameCheckIn": "Sparks",
        "ageCheckIn": "5"
    }
]
let countObjPage=10; // // кількість обєктів на сторінці
let currentPage = 0; // // поточна сторінка
function arrDisplay() {
    let startIndex = countObjPage * currentPage;
    let finalIndex = startIndex + countObjPage;
    let currentItems = arrHundred.slice(startIndex, finalIndex); // // обрізаємо згідно індексів кількість елементів які хочемо відображати
    divElements.innerHTML=''; // // відокремлюємо
    for (let oneElement of currentItems) {
        let divOneElement = document.createElement('div');
        divOneElement.innerHTML = `name: ${oneElement.nameCheckIn}, surname: ${oneElement.surnameCheckIn}, age:${oneElement.ageCheckIn}`
        divElements.appendChild(divOneElement);
    }
}
nextBtn.onclick=function nextPage () {
    currentPage++;
    if(currentPage>=Math.floor(arrHundred.length / countObjPage)){
        currentPage = 0;
    }
    arrDisplay(); // // функція запрацює після того, як ми її тут покличемо
}
prevBtn.onclick=function prevPage () {
    currentPage--;
    if(currentPage<0){
        currentPage=Math.floor(arrHundred.length / countObjPage)-1
    }
    arrDisplay(); // // функція запрацює після того, як ми її тут покличемо
}
window.onload=function () {
    arrDisplay(); // // стартове завантаження з відображенням інфо
}
divNext.appendChild(nextBtn);
divNext.appendChild(prevBtn);
document.body.appendChild(divElements);
document.body.appendChild(divNext);
// // - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let divText = document.createElement('div');
divText.classList.add('text');
let divTextBtn = document.createElement('div');
divTextBtn.classList.add('divTextBtn');
let clearBtn =document.createElement('button');
clearBtn.classList.add('clearBtn');
let textBtn =document.createElement('button');
textBtn.classList.add('textBtn');
divText.innerHTML=`при натисканні на кнопку зникає даний текс`
textBtn.innerHTML='show'
clearBtn.innerHTML='clear'
textBtn.onclick=function () {
    divText.innerHTML=``;
}
clearBtn.onclick=function () {
    divText.innerHTML=``;
}
textBtn.onclick=function () {
    divText.innerHTML=`при натисканні на кнопку зникає даний текс`;
}
divTextBtn.appendChild(textBtn);
divTextBtn.appendChild(clearBtn);
document.body.appendChild(divText);
document.body.appendChild(divTextBtn);
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //  При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let divAge=document.createElement('div');
document.body.appendChild(divAge);
let formAge=document.getElementById('f2');
let labelAge0=document.getElementsByTagName('label')[0];
let ageInput=document.getElementById('age people');
let buttonAge=document.getElementsByClassName('ageButton')[0];
formAge.append(labelAge0,ageInput,buttonAge);

buttonAge.onclick=function (e) {
    e.preventDefault();
    let divAudit=document.createElement('div');
    divAudit.classList.add('divAudit');
    if(ageInput.value<18){
        divAudit.innerHTML=`вік меньше ніж 18 років`
        divAudit.style.background='indianred';
    } else{
        divAudit.innerHTML=`повнолітній`
    }
    formAge.appendChild(divAudit);
}
divAge.append(formAge);
// // *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
let divTable=document.createElement('div');
document.body.appendChild(divTable);
let formTable=document.getElementById('table');
let labelTable0=document.getElementsByTagName('label')[0];
let linesInput=document.getElementById('lines');
let labelTable1=document.getElementsByTagName('label')[1];
let columnsInput=document.getElementById('columns');
let labelTable2=document.getElementsByTagName('label')[2];
let contentsInput=document.getElementById('contents');
let buttonTable=document.getElementsByClassName('tableButton')[0];
formTable.append(labelTable0,linesInput,labelTable1,columnsInput,labelTable2,contentsInput,buttonTable);

buttonTable.addEventListener('click', function (e) {
    e.preventDefault();
    let divTableRez=document.createElement('div');
    divTableRez.classList.add('divTableRez');
    // if(ageInput.value<18){
    //     divAudit.innerHTML=`вік меньше ніж 18 років`
    //     divAudit.style.background='indianred';
    // } else{
    //     divAudit.innerHTML=`повнолітній`
    // }
    formTable.appendChild(divTableRez);
})
divTable.append(formTable);
