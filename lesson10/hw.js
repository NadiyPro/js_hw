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
let arrayHundred = [];
    for(let i=0;i<100;i++){
        arrayHundred.push([arrayHundred.length] = [i]);
    }
console.log(arrayHundred)
    window.onload = function(){
       for(let i=0;i<10;i++){
           arrayHundred.length = 10;
       }
}

// divNext.innerHTML = `${arrayHundred}`;
nextBtn.onclick=function (e) {
    e.preventDefault();

}

divNext.appendChild(nextBtn);
divNext.appendChild(prevBtn);
document.body.appendChild(divElements);
document.body.appendChild(divNext);


