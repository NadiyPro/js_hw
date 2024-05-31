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
            hDiv.innerHTML=`<h2>id: ${description.id} <br> ${description.name} </h2> <p> cuisine: ${description.cuisine} <br> difficulty: ${description.difficulty} <br> caloriesPerServing: ${description.caloriesPerServing} <br> cookTimeMinutes: ${description.cookTimeMinutes}</p>`
            const img = document.createElement('img');
            // img.classList.add('img');

            innerDiv.append(hDiv)


        }
    })