// // - створити блок,
let div = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap','collapse','alpha','beta');
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
clone.classList.add('clone');

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
    let divC = document.createElement('div');
    document.body.append(divC);
    let p = document.createElement('p');
    p.innerHTML=`title: ${divCour.title}, monthDuration: ${divCour.monthDuration}`;
    divC.append(p);
}
// // - Є масив
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
for (let item of coursesAndDurationArray) {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    document.body.append(itemDiv);
    let h = document.createElement('h1');
    h.classList.add('heading');
    h.innerHTML=`title: ${item.title}`;
    itemDiv.append(h);
    let pItem = document.createElement('p');
    pItem.innerHTML=`monthDuration: ${item.monthDuration}`;
    itemDiv.append(pItem);
}

// // - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// debugger;
for (let simpson of simpsons) {
    let simpsonDiv = document.createElement('div');
    simpsonDiv.classList.add('member');
    document.body.append(simpsonDiv);
    let pSimpson = document.createElement('p');
    pSimpson.innerHTML=`name: ${simpson.name} <br> surname: ${simpson.surname} <br>  age: ${simpson.age} <br>  info: ${simpson.info}`;
    simpsonDiv.append(pSimpson);
    let imgSimpson = document.createElement('img');
    imgSimpson.src=`${simpson.photo}`
    simpsonDiv.append(imgSimpson);
}
// // Цикл в циклі
// // - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// // для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let coursesDiv = document.createElement('div');
    coursesDiv.classList.add('oneClass');
    document.body.append(coursesDiv);

for (let courses of coursesArray) {
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('titleClass');
    coursesDiv.append(titleDiv);
    let pTitle = document.createElement('p');
    pTitle.innerHTML=`${courses.title}`;
    titleDiv.append(pTitle);

    let twoDiv = document.createElement('div');
    twoDiv.classList.add('twoDiv');
    coursesDiv.append(twoDiv);

    let monthDurationDiv = document.createElement('div');
    monthDurationDiv.classList.add('monthClass');
    twoDiv.append(monthDurationDiv);
    let pMonth = document.createElement('p');
    pMonth.innerHTML=`monthDuration: ${courses.monthDuration}`;
    monthDurationDiv.append(pMonth);

    let hourDurationDiv = document.createElement('div');
    hourDurationDiv.classList.add('hourClass');
    twoDiv.append(hourDurationDiv);
    let pHour = document.createElement('p');
    pHour.innerHTML=`hourDuration: ${courses.hourDuration}`;
    hourDurationDiv.append(pHour);

    let modulesDiv = document.createElement('ul');
    modulesDiv.classList.add('threeDiv');
    coursesDiv.append(modulesDiv);

    for (let li of courses.modules){
        let liModules = document.createElement('li');
        liModules.innerHTML=li;
        modulesDiv.append(liModules);
    }
}
