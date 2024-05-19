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
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let cars = [
    {model: "Camry", make: "Toyota", year: 2024, speed: 210, engineCapacity: 2487},
    {make: "Jeep", model: "Wrangler", year: 2022, speed: 180 , engineCapacity: 1995},
    {make: "Honda", model: "Civic", year: 2021, speed: 180, engineCapacity: 1993}
];
