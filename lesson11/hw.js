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
                let idBasicH3=document.createElement('h3');
                idBasicH3.classList.add('idBasicH3')
                idBasicH3.innerHTML=`${cart.id}`
                    for (let product of cart.products) {
                        let productsDiv = document.createElement('div');
                        productsDiv.classList.add('productsDiv')
                        let img = document.createElement('img');
                        img.classList.add('img')
                        img.src=product.thumbnail;
                        productsDiv.innerHTML=`<h2>${product.title}</h2> <p>discountPercentage: ${product.discountPercentage} <br> discountedTotal: ${product.discountedTotal} <br> id:${product.id} <br> price: ${product.price} <br> quantity:${product.quantity}</p> `
                        productsDiv.append(img);
                        idBasicH3.append(productsDiv);
                    }
                basicDiv.append(cartDiv)
                cartDiv.append(idBasicH3)
            }
    })
// .catch(
//     (products)=>console.log('image is missing id 25')
// )
//     https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro+/thumbnail.png - відсутнє зображення в 25 елементі через що вибиває помилку



