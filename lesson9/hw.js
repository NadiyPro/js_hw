// // - створити блок,
let div = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.innerHTML = 'hello';
// div.style.background = 'darkturquoise';
// div.style.color = 'indigo';
// div.style.fontSize = '30px';
// div.style.height = '100px';

// // - додати цей блок в body.
document.body.appendChild(div);
// // - клонувати його повністю, та додати клон в body.
let clone =div.cloneNode(true);
document.body.appendChild(clone);
div.classList.add('clone');

// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arrayUl = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');
document.body.appendChild(ul);
for (let i=0;i<arrayUl.length;i++) {
   let li = document.createElement('li');
    li.innerHTML=arrayUl[i];
    ul.append(li);
    console.log(li)
}
// // - Є масив
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
    let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let divCour of coursesAndDurationArray) {
    let divCour = document.createElement('div');
    divCour.innerHTML=`title: ${divCour.title}, monthDuration: ${divCour.monthDuration}`;
    document.body.append(divCour);
    console.log(divCour);
}
// for (let i=0;i<coursesAndDurationArray.length;i++) {
//     let divCour = document.createElement('div');
//     // let li = document.createElement('li');
//     divCour.innerHTML=coursesAndDurationArray[i];
//     document.body.append(divCour);
//     console.log(divCour)
// }