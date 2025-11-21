let querystring = location.search
let querystringOBJ = new URLSearchParams(querystring)

let id = querystringOBJ.get('id')
console.log(id)
fetch(`https://dummyjson.com/products/${id}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let productos1 = document.querySelector('.imgIphone')

    productos1.innerHTML = `<img src="${data.images[0]}" alt="" class="iphone17img">`
    

  let productos2 = document.querySelector('.titulo')

    productos2.innerHTML =`<section class="titulo"> 
            <h1 class="tituloIphone"> ${data.title} </h1> 
            <h2 class="precioIphone"> $${data.price}</h2> 
        </section>`

  let productos3 = document.querySelector('.hola')

  console.log(productos3);
  
  productos3.innerHTML = `<p>${data.description}</p>  
        <p>${data.brand}</p>  
        <p>${data.category}</p>
        <p>${data.stock}</p>
        <ul>
            <p>lista de tags:</p>
            <li>${data.tags[0]}</li>
            <li>${data.tags[1]}</li>
            <li>${data.tags[2]}</li>
        </ul>`

  let reviews = document.querySelector('.reviews')

reviews.innerHTML = `<ul> <h3>Reviews</h3>
        <li>Rating: ${data.reviews[0].rating}</li>
        <li>Texto del comentario: ${data.reviews[0].comment}</li>
        <li>Fecha: ${data.reviews[0].date}</li>
        <li>Nombre del usuario: ${data.reviews[0].reviewerName}</li></ul>`

})
.catch(function(error) {
  console.log(error);
})