// // ************************** User ****************************** // //
// // - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone) {
        this.id= id;
        this.name= name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
let newUser = [];
let user1 = new User(1, 'vasya','Graham','Sincere@april.biz','380636632510');
let user2 = new User(2, 'petya','Howell','Shanna@melissa.tv','380636632511');
let user3 = new User(3, 'kolya','Bauch','Nathan@yesenia.net','380636632512');
let user4 = new User(4, 'olya','Lebsack','Julianne.OConner@kory.org','380636632513');
let user5 = new User(5, 'max','Dietrich','Lucio_Hettinger@annie.ca','380636632514');
let user6 = new User(6, 'anya','Schulist','Karley_Dach@jasper.info','380636632515');
let user7 = new User(7, 'oleg','Weissnat','Telly.Hoeger@billy.biz','380636632516');
let user8 = new User(8, 'andrey','Runolfsdottir','Sherwood@rosamond.me','380636632517');
let user9 = new User(9, 'masha','Reichert','Chaim_McDermott@dana.io','380636632518');
let user10 = new User(10, 'olya','DuBuqu','Rey.Padberg@karina.biz','380636632519');
newUser.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
console.log(newUser)
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let idUser = newUser.filter(iter=>{
        if(iter.id % 2===0){
            return iter;
        }
});
console.log(idUser);
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser= newUser.toSorted((iter1,iter2)=>iter1.id-iter2.id);
console.log(sortUser);
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User {

    constructor(id,name,surname,email,phone,order) {
        super (id,name,surname,email,phone);
        this.order = order
    }
}
let clients = [];
let client1 = new Client (1, 'vasya','Graham','Sincere@april.biz','380636632510', ['apple', 'orange', 'plum']);
let client2 = new Client (2, 'petya','Howell','Shanna@melissa.tv','380636632511',['apple', 'orange', 'plum','pear']);
let client3 = new Client (3, 'kolya','Bauch','Nathan@yesenia.net','380636632512',['apple', 'orange']);
let client4 = new Client (4, 'olya','Lebsack','Julianne.OConner@kory.org','380636632513',['apple', 'orange', 'plum','pear','kiwi']);
let client5 = new Client (5, 'max','Dietrich','Lucio_Hettinger@annie.ca','380636632514',['apple', 'orange', 'plum']);
let client6 = new Client (6, 'anya','Schulist','Karley_Dach@jasper.info','380636632515',['apple', 'orange', 'plum']);
let client7 = new Client (7, 'oleg','Weissnat','Telly.Hoeger@billy.biz','380636632516',['apple', 'orange', 'plum','pear','kiwi']);
let client8 = new Client (8, 'andrey','Runolfsdottir','Sherwood@rosamond.me','380636632517',['apple', 'orange', 'plum','pear','kiwi','mango']);
let client9 = new Client (9, 'masha','Reichert','Chaim_McDermott@dana.io','380636632518',['apple', 'orange', 'plum','cherry','merry','pear','kiwi','mango']);
let client10 = new Client (10, 'olya','DuBuqu','Rey.Padberg@karina.biz','380636632519',['apple', 'orange', 'plum']);
clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
console.log(clients);
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientsSort = clients.toSorted((client1,client2)=>client1.order.length-client2.order.length);
console.log(clientsSort);
// // ********************************************** Cars конструктор  ********************************************** // //
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Cars1 (model,make,year,speed,engineCapacity){
        this.model= model;
        this.make= make;
        this.year= year;
        this.speed= speed;
        this.engineCapacity= engineCapacity;
        this.drive=function (){
            console.log(`їдемо зі швидкістю ${this.speed} на годину`)
        };
    this.info=function () {
        console.log(`model - ${this.model}; make - ${this.make}; year - ${this.year}; speed - ${this.speed}; engineCapacity - ${this.engineCapacity};`)
    };
    //      this.info=function () {
    //          for (const item in this) {
    //              if (typeof this[item] === 'function') continue;
    //              let valueE = this[item];
    //              console.log(item, valueE)
    //          }
    //      };
        this.increaseMaxSpeed=function (newSpeed){
            newSpeed += this.speed;
            console.log(newSpeed)
        };
        this.changeYear=function (newValue){
            this.year = newValue;
            console.log(newValue)
        };
}
let car1 = new Cars1 ('Camry','Toyota',2024,210,2487);
console.log(car1)
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car1.drive()
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car1.info()
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car1.increaseMaxSpeed(300)
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
car1.changeYear(2015)
car1.info()
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Cars1.prototype.addDriver = function (name,age,experience){
    this.name=name;
    this.age=age;
    this.experience=experience;
    console.log(`name - ${this.name}; age - ${this.age}; experience - ${this.experience};model - ${this.model}; make - ${this.make}; year - ${this.year}; speed - ${this.speed}; engineCapacity - ${this.engineCapacity};`)
    // for (const driver in this) {
    //     if (typeof this[driver] === 'function') continue;
    //     let valueD = this[driver];
    //     console.log(driver, valueD)
    // }
};
car1.addDriver('Sergey', 34, 2)
console.log(car1)
// // ************************* Cars class ****************************// //
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Cars2 {
    constructor(modelClass, makeClass, yearClass, speedClass, engineCapacityClass) {
        this.modelClass = modelClass;
        this.makeClass = makeClass;
        this.yearClass = yearClass;
        this.speedClass = speedClass;
        this.engineCapacityClass = engineCapacityClass;
    }
    drive=function (){
        console.log(`їдемо зі швидкістю ${this.speedClass} на годину`)
    };
   info=function () {
        console.log(`model - ${this.modelClass}; make - ${this.makeClass}; year - ${this.yearClass}; speed - ${this.speedClass}; engineCapacity - ${this.engineCapacityClass};`)
    };
    // info=function () {
    //     for (const itemClass in this) {
    //         if (typeof this[itemClass] === 'function') continue;
    //         let valueClass = this[itemClass];
    //         console.log(itemClass, valueClass)
    //     }
    // };
    increaseMaxSpeed=function (newSpeed){
        newSpeed += this.speedClass;
        console.log(newSpeed)
    };
    changeYear=function (newValue){
        this.yearClass = newValue;
        console.log(newValue)
    };
}
let car2 = new Cars2 ('Civic','Honda',2023,180,1993);
console.log(car2)
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car2.drive()
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car2.info()
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car2.increaseMaxSpeed(150)
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
car2.changeYear(2017)
car2.info()
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Cars2.prototype.addDriver = function (nameClass,ageClass,experienceClass){
    this.nameClass=nameClass;
    this.ageClass=ageClass;
    this.experienceClass=experienceClass;
    console.log(`name - ${this.nameClass}; age - ${this.ageClass}; experience - ${this.experienceClass};model - ${this.modelClass}; make - ${this.makeClass}; year - ${this.yearClass}; speed - ${this.speedClass}; engineCapacity - ${this.engineCapacityClass};`)
    // for (const driverClass in this) {
    //     if (typeof this[driverClass] === 'function') continue;
    //     let valueDC = this[driverClass];
    //     console.log(driverClass, valueDC)
    // }
};
car2.addDriver('Nadia', 33, 1)
console.log(car2)
// // ***************************** попелюшка / принц *********************************************// //
// / -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(nameCinderella, ageCinderella,legsCinderella){
    this.nameCinderella=nameCinderella;
    this.ageCinderella=ageCinderella;
    this.legsCinderella=legsCinderella
}
let arrayCinderella=[];
let Cinderella1=new Cinderella ('Olivia',18,38);
let Cinderella2=new Cinderella ('Amelia',20,37);
let Cinderella3=new Cinderella ('Isla',21,37);
let Cinderella4=new Cinderella ('Ava',19,38);
let Cinderella5=new Cinderella ('Ivy',21,35);
let Cinderella6=new Cinderella ('Freya',20,38);
let Cinderella7=new Cinderella ('Lily',18,39);
let Cinderella8=new Cinderella ('Florence',19,37);
let Cinderella9=new Cinderella ('Mia',20,36);
let Cinderella10=new Cinderella ('Willow',18,38);
arrayCinderella.push(Cinderella1,Cinderella2,Cinderella3,Cinderella4,Cinderella5,Cinderella6,Cinderella7,Cinderella8,Cinderella9,Cinderella10);
console.log(arrayCinderella);
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Pince{
    constructor(shoes,namePince,agePince) {
        this.shoes=shoes;
        this.namePince=namePince;
        this.agePince=agePince;
    }
}
let pince = new Pince (35,'Nick',25);
console.log(pince)
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let cinderellaName = function () {
        for(let i=0;i<arrayCinderella.length;i++){
            if(pince.shoes===arrayCinderella[i].legsCinderella){
                let shoesCinderella = arrayCinderella[i]
                console.log(shoesCinderella)
            }
        }
}
cinderellaName()
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(arrayCinderella.find(shoesFind=>pince.shoes===shoesFind.legsCinderella));
// // Через Array.prototype. створити власний foreach, filter, map
// // ******************* foreach ******************** // //
Array.prototype.myForeach = function (){
        for(const item of this){
        console.log(item)
        }
}
let arrayForeach = ['apple', 'orange', 'plum','cherry','merry','pear','kiwi','mango'];
arrayForeach.myForeach()
// // ******************* filter ******************** // //
let arrayFilter = [
    {name: 'petya', age: 30},
    {name: 'kolya', age: 29},
    {name: 'olya', age: 28},
    {name: 'max', age: 30},
    {name: 'anya', age: 31, },
    {name: 'oleg', age: 28},
    {name: 'andrey', age: 29},
    {name: 'masha', age: 30 },
    {name: 'max', age: 31 }
];
Array.prototype.myFilter = function (callback){
    for(let itemFilter of this){
        if(callback(itemFilter)){
            console.log(itemFilter);
        }
    }
}
arrayFilter.myFilter((value)=>value.age===30);

