// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)

// let users = [
//     {id: 1, name: 'vasya', surname: 'Graham', email: 'Sincere@april.biz', phone: '380636632510'},
//     {id: 2,name: 'petya', surname: 'Howell', email: 'Shanna@melissa.tv', phone: '380636632511'},
//     {id: 3,name: 'kolya', surname: 'Bauch', email: 'Nathan@yesenia.net', phone: '380636632512'},
//     {id: 4,name: 'olya', surname: 'Lebsack', email: 'Julianne.OConner@kory.org', phone: '380636632513'},
//     {id: 5,name: 'max', surname: 'Dietrich', email: 'Lucio_Hettinger@annie.ca', phone: '380636632514'},
//     {id: 6,name: 'anya', surname: 'Schulist', email: 'Karley_Dach@jasper.info', phone: '380636632515'},
//     {id: 7,name: 'oleg', surname: 'Weissnat', email: 'Telly.Hoeger@billy.biz', phone: '380636632516'},
//     {id: 8,name: 'andrey', surname: 'Runolfsdottir', email: 'Sherwood@rosamond.me', phone: '380636632517'},
//     {id: 9,name: 'masha', surname: 'Reichert', email: 'Chaim_McDermott@dana.io', phone: '380636632518'},
//     {id: 10,name: 'olya', surname: 'DuBuqu', email: 'Rey.Padberg@karina.biz', phone: '380636632519'}
// ];

function Users (id,name,surname,email,phone) {
        this.id= id;
        this.name= name;
        this.surname= surname;
        this.email= email;
        this.phone= phone;
    }
let newUser = [];
let user1 = new Users(1, 'vasya','Graham','Sincere@april.biz','380636632510');
let user2 = new Users(2, 'petya','Howell','Shanna@melissa.tv','380636632511');
let user3 = new Users(3, 'kolya','Bauch','Nathan@yesenia.net','380636632512');
let user4 = new Users(4, 'olya','Lebsack','Julianne.OConner@kory.org','380636632513');
let user5 = new Users(5, 'max','Dietrich','Lucio_Hettinger@annie.ca','380636632514');
let user6 = new Users(6, 'anya','Schulist','Karley_Dach@jasper.info','380636632515');
let user7 = new Users(7, 'oleg','Weissnat','Telly.Hoeger@billy.biz','380636632516');
let user8 = new Users(8, 'andrey','Runolfsdottir','Sherwood@rosamond.me','380636632517');
let user9 = new Users(9, 'masha','Reichert','Chaim_McDermott@dana.io','380636632518');
let user10 = new Users(10, 'olya','DuBuqu','Rey.Padberg@karina.biz','380636632519');
newUser.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
console.log(newUser)



