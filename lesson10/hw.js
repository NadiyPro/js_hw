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
