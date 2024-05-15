// // описати колоду карт (від 6 до туза без джокерів)
// // - знайти піковий туз
// // - всі шістки
// // - всі червоні карти
// // - всі буби
// // - всі трефи від 9 та більше
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }


let cardSuit = ['spade', 'diamond','heart', 'clubs'];
let value = ['6','7','8','9','10','ace','jack','queen','king'];
let color = ['red','black'];
let cards = value.forEach(item => {item.concat(cardSuit)}) //value.concat(cardSuit); //value.forEach (item => value.concat(cardSuit));
// let cards = cardSuit.reduce((acc,index) =>{ if (acc.){
//
// }},[[],[]])
console.log (cards)


