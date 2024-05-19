// // - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone) {
        this.id= id;
        this.name= name;
        this.surname = surname;
        this.email= email;
        this.phone= phone;
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
