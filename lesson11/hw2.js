// // - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
const basicDiv = document.createElement('div');
basicDiv.classList.add('basicDiv');
document.body.append(basicDiv)
fetch('https://dummyjson.com/recipes')
    .then ((response)=>response.json())
    .then(({recipes})=>{console.log(recipes)
    })
fetch('https://dummyjson.com/recipes')
    .then ((response)=>response.json())
    .then(({recipes})=>{
        for(let description of recipes){
            const innerDiv = document.createElement('div');
            innerDiv.classList.add('innerDiv');
            basicDiv.append(innerDiv)

            const hDiv = document.createElement('div');
            hDiv.classList.add('hDiv');
            hDiv.innerHTML=`<h2>id: ${description.id} <br> ${description.name} </h2> <p> rating: ${description.rating} <br> cuisine: ${description.cuisine} <br> difficulty: ${description.difficulty} <br> caloriesPerServing: ${description.caloriesPerServing} <br> cookTimeMinutes: ${description.cookTimeMinutes} <br> prepTimeMinutes: ${description.prepTimeMinutes} <br> reviewCount: ${description.reviewCount} <br> servings:  ${description.servings} <br> userId: ${description.userId}   </p>`

            const img = document.createElement('img');
            img.classList.add('img');
            img.src=description.image;

            const ingredientsUl = document.createElement('ul');
            // ingredientsUl.classList.add('ingredientsUl');
            ingredientsUl.innerHTML = `Ingredients:`
            hDiv.append(ingredientsUl)

            for(let iter of description.ingredients){
                const ingredientsLi = document.createElement('li');
                ingredientsLi.innerHTML=`${iter}`
                ingredientsUl.append(ingredientsLi)
            }

            const instructionsOl = document.createElement('ol');
            // instructionsOl.classList.add('instructionsOl');
            instructionsOl.innerHTML=`Instructions:`
            hDiv.append(instructionsOl)

            for(let iterOl of description.ingredients){
                const instructionsLi = document.createElement('li');
                instructionsLi.innerHTML=`${iterOl}`
                instructionsOl.append(instructionsLi)
            }

            innerDiv.append(hDiv)
            innerDiv.append(img)

        }
    })