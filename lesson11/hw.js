// // - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
const basicDiv = document.createElement('div');
basicDiv.classList.add('basicDiv');
document.body.append(basicDiv)

fetch('https://dummyjson.com/carts')
    .then((response)=>response.json())
    .then(({carts})=>{
            for(let cart of carts){
                let cartDiv=document.createElement('div');
                cartDiv.classList.add('cartDiv');
                cartDiv.innerHTML=`<h2>Basket id: ${cart.id} </h2> <br> <p> total: ${cart.total} <br>  discountedTotal: ${cart.discountedTotal} <br> totalProducts: ${cart.totalProducts} <br>  totalQuantity: ${cart.totalQuantity} <br> userId: ${cart.userId} </p> `

                for (let product of cart.products) {
                        let productsDiv = document.createElement('div');
                        productsDiv.classList.add('productsDiv')
                        let img = document.createElement('img');
                        img.classList.add('img')
                        img.src=product.thumbnail;
                        productsDiv.innerHTML=`<h3>${product.title}</h3> <p>discountPercentage: ${product.discountPercentage} <br> discountedTotal: ${product.discountedTotal} <br> id:${product.id} <br> price: ${product.price} <br> quantity:${product.quantity}</p> `
                        productsDiv.append(img);
                    cartDiv.append(productsDiv);
                    }
                basicDiv.append(cartDiv)
        }
    })
    .finally(
    ()=>console.log('image is missing id 25')
)
// https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro+/thumbnail.png - відсутнє зображення в 25 елементі через що вибиває помилку





