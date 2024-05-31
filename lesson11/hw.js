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
                // idBasicH2.classList.add('idBasicH3')
                idBasicH2.innerHTML=`${cart.id}`
                    for (let item of cart.products) {
                        let productsDiv = document.createElement('div');
                        productsDiv.classList.add('productsDiv')
                        let img = document.createElement('img');
                        img.classList.add('imgProducts')
                        img.src=item.thumbnail;
                        // let titleH2 = document.createElement('h2');
                        // titleH2.innerHTML=`${item.title}`
                        // titleH2.classList.add('titleH2')

                        idBasicH2.append(productsDiv)
                        // productsDiv.append(titleH2)
                        idBasicH2.append(img)

                    }
                // }
                //     // for(let thum in product.thumbnail){
                    //     let productsDiv =document.createElement('div');
                    //     productsDiv.classList.add('productsDiv')
                    //     console.log()
                    //     idBasicH2.append(productsDiv)
                    // }

                // }



                basicDiv.append(cartDiv)
                cartDiv.append(idBasicH2)
            }
    }
        )
