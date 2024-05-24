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
