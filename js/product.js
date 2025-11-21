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
    productos1.innerHTML = `<img src="${data.product.images[0]}" alt="" class="iphone17img">`
    

  let productos2 = document.querySelector('.partederecha')
    productos2.innerHTML =`<section class="titulo"> 
            <h1 class="tituloIphone"> ${data.product.title} </h1> 
            <h2 class="precioIphone"> ${data.product.price}</h2> <a class="pagoIphone">From $1599 or $133.25/mo For 12 Months</a>
        </section>`
  let productos3 = document.querySelector('.innovaciones')
  productos3.innerHTML = `<p>${data.product.description}</p>  
        <p>${data.product.brand}</p>  
        <p>${data.product.category}</p>
        <p>${data.product.stock}</p>
        <ul>
            <p>lista de tags</p>
            <li>${data.product.tags[0]}</li>
            <li>${data.product.tags[1]}</li>
            <li>${data.product.tags[2]}</li>
        </ul>`

  let reviews = document.querySelector('.reviews')
reviews.innerHTML = `<h3>Reviews</h3>
        <p>Rating: ${data.product.reviews[0].rating}</p>
        <p>Texto del comentario: ${data.product.reviews[0].comment}</p>
        <p>Fecha: ${data.product.reviews[0].date}</p>
        <p>Nombre del usuario: ${data.product.reviews[0].reviewerName}</p>`

})
.catch(function(error) {
  console.log(error);
})