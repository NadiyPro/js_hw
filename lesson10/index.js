// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// // Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// // Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// let divSessions=document.createElement('div');
//
let dateSessions = new Date();
let arraySessions = localStorage.getItem('sessions') || [];
arraySessions.push(dateSessions);
localStorage.setItem('count', JSON.stringify(arraySessions));

document.body.appendChild(divSessions);