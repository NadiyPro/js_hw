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
let numberN=localStorage.getItem('count') || 1;
if(!numberN){
    localStorage.setItem('count', JSON.stringify(numberN))
} else {
    let numberSum =  JSON.parse(numberN);
    numberSum++;
    localStorage.setItem('count', JSON.stringify(numberSum));
}
divNumber.innerHTML=`${numberN}`
// let numberSum =  JSON.parse(numberN);
// localStorage.setItem('count', JSON.stringify(numberSum));
// divNumber.innerHTML=`${numberN}`

// numberSum.push(numberN);
// localStorage.setItem('count', JSON.stringify(numberSum));
// divNumber.innerHTML=`${numberSum}`
// window.onload=function () {
//     numberN ++;
//     localStorage.setItem('count',numberN);
//     divNumber.innerHTML=`${numberN}`
// }


document.body.appendChild(divNumber);

