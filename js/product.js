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
  let productos = document.querySelector(`  <section class="imgIphone">
        <img src="${data.produtct.images[0]}" alt="" class="iphone17img">
    </section>
<section class="partederecha">
        <section class="titulo"> 
            <h1 class="tituloIphone"> ${data.product.title} </h1> 
            <h2 class="precioIphone"> ${data.product.price}</h2> <a class="pagoIphone">From $1599 or $133.25/mo For 12 Months</a>
        </section>
     <section class="innovaciones">
        <p>${data.product.description}</p>  
        <p>${data.product.brand}</p>  
        <p>${data.product.category}</p>
        <p>${data.product.stock}</p>
        <ul>
            <p>${data.product.tags}</p>
            <li>tag</li>
            <li>tag</li>
            <li>tag</li>
        </ul>`)
productos.innerHTML = a
console.log(a)

})
.catch(function(error) {
  console.log("Error: " + error);
})