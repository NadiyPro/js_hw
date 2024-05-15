// // - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // -- відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray.toSorted((value1,value2) => value1.monthDuration - value2.monthDuration );
console.log(sortMonthDuration);
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterMonthDuration = coursesAndDurationArray.filter(value => value.monthDuration>=5);
console.log(filterMonthDuration);
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapId = coursesAndDurationArray.map((value,index) => ({id: index+1,...value}));
console.log(mapId);
