// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// // Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// // Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let divSessions=document.createElement('div');
divSessions.classList.add('divSessions');
let mySessions = JSON.parse(localStorage.getItem('sessions'));
for(let session of mySessions){
    console.log(session)
    let divSession=document.createElement('div');
    divSession.classList.add('divSession');
    let ddd = JSON.stringify(session);
    divSession.innerHTML= `${ddd}`;
    divSessions.appendChild(divSession);
}

document.body.appendChild(divSessions);
