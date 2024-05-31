// // - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
const basicDiv = document.createElement('div');
basicDiv.classList.add('basicDiv');
document.body.append(basicDiv)

fetch('https://dummyjson.com/carts')
.then((response)=>response.json())
.then(({carts})=>console.log(carts))

fetch('https://dummyjson.com/carts')
    .then((response)=>response.json())
    .then(({carts})=>{
            for(let cart of carts){
                let cartDiv=document.createElement('div');
                cartDiv.classList.add('cartDiv');
                let idBasicH2=document.createElement('h3');
                idBasicH2.classList.add('idBasicH3')
                idBasicH2.innerHTML=`${cart.id}`
                let cartProd = cart.products;

                    for (let {thumbnail} of cartProd) {

                        let productsDiv = document.createElement('div');
                        productsDiv.classList.add('productsDiv')
                        let img = document.createElement('img');
                        img.classList.add('img')
                        img.src=`${thumbnail}`;
                        console.log(thumbnail)
                        idBasicH2.append(productsDiv)
                        idBasicH2.append(img)
                    }
                basicDiv.append(cartDiv)
                cartDiv.append(idBasicH2)

            }
    }
        )
