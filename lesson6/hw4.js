// //Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //         diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }

let cardSuit = ['spade', 'diamond','heart', 'club'];
let value = ['6','7','8','9','10','ace','jack','queen','king'];

let cardColumn=cardSuit.reduce((acc,suit)=>{
    value.forEach(item=>
        acc.push({
                cardSuit: suit,
                value: item
            }
        )
    )
    return acc;
},[])
console.log(cardColumn);