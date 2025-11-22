let querystring = location.search
let querystringOBJ = new URLSearchParams(querystring)

let category = querystringOBJ.get('category')
let titulo = document.querySelector('#h1')
        titulo.innerHTML = `Explora nuestros ${category}`
fetch(`https://dummyjson.com/products/category/${category}`)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data)
        
		let category = document.querySelector('.productos')
		let categorias = ""
        for (let i=0; i<data.products.length; i++) {
        categorias += `
        <article><img class="img" src="${data.products[i].images[0]}">
                <h3>${data.products[i].title}</h3>
                <ul>
                    <li>${data.products[i].description}</li>
                </ul>
                <div><p>$${data.products[i].price}</p></div>
                <a class="ver" href="./product.html?id=${data.products[i].id}">Ver Mas</a>
                </article>`
        }
        category.innerHTML = categorias
        console.log(categorias)
        console.log(data.product.length)
	})
	.catch(function(error){
		console.log(error)
	})