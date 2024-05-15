// // описати колоду карт (від 6 до туза без джокерів)
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }

let cardSuit = ['spade', 'diamond','heart', 'club'];
let value = ['6','7','8','9','10','ace','jack','queen','king'];
let color = ['red','black'];

let cardColumn=cardSuit.reduce((acc,suit)=>{
    value.forEach(item=>
    {if(suit==='diamond' || suit==='heart'){color='red'}else {color='black'}
        acc.push({
                cardSuit: suit,
                value: item,
                color: color
            }
        )
    })
    return acc;
},[])
console.log(cardColumn);
// // - знайти піковий туз
let ace = cardColumn.filter(item=> item.cardSuit === 'spade' && item.value ==='ace');
console.log(ace);
// // - всі шістки
let six = cardColumn.filter(item=> item.value ==='6');
console.log(six);
// // - всі червоні карти
let reds = cardColumn.filter(item=> item.color ==='red');
console.log(reds);
// // - всі буби
let diamonds = cardColumn.filter(item=> item.cardSuit === 'diamond');
console.log(diamonds);
// // - всі трефи від 9 та більше
let clubs = cardColumn.filter(item=> item.cardSuit === 'club' &&  +item.value!==6 &&  +item.value!==7 &&  +item.value!==8 )
console.log(clubs);




