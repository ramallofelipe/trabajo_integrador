

fetch("https://dummyjson.com/products/category/smartphones")
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  
    
  let productos = document.querySelector('.productos')
  
  let categorias = ""
        for (let i=0; i<10; i++) {
        categorias += `<article>
                     <img class="img" src="${data.products[i].images[0]}" alt="">
                         <h3>${data.products[i].title}</h3>
                            <ul>
                                  <li>${data.products[i].description}</li>
                                
                             </ul>
                  <div><p>$${data.products[i].price}</p></div>
                  <a class="ver" href="product.html?id=${data.products[i].id}">Ver Mas</a>
                </article>`
        }
        productos.innerHTML = categorias
  

})
.catch(function(error) {
  console.log("Error: " + error);
})


fetch("https://dummyjson.com/products/category/mobile-accessories")
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let popular = document.querySelector('.vendido')
  function hola() {
    let popular = data.products[0]
    for (let i=1;i<data.products.length;i++){
        if (data.products[i].rating > popular.rating){
            popular = data.products[i]
        }
    }
    return popular
}
console.log(hola())
let primero = `<h1>PRODUCTO MAS POPULAR:</h1>
                    <article class="primero">
                    <img class="auris" src="${hola().images[0]}" alt="">
                    <article class="air">
                    <article class="ah2"><h2 class="h2a">${hola().title}</h2></article>
                    <p class="parrafo_airpods">${hola().description}</p>
                    <p class="parrafo_airpods">$${hola().price}</p>
                    <a class="comprar"  href="product.html?id=${hola().id}">Comprar</a></article></article>
                </article> <section class="productos">`
   
  let lista1 = ""
  lista1 += primero

  for (let i=0; i<data.products.length ; i++){
    if (data.products[i].rating > 3.5){
        lista1 += `<article>
                     <img class="img" src="${data.products[i].images[0]}" alt="">
                         <h3>${data.products[i].title}</h3>
                            <ul>
                                  <li>${data.products[i].description}</li>
                                
                             </ul>
                  <div><p>$${data.products[i].price}</p></div>
                  <a class="ver" href="product.html?id=${data.products[i].id}">Ver Mas</a>
                </article>`}
}
lista1 += '</section>'
console.log(lista1)
popular.innerHTML = lista1
console.log(b)
})
.catch(function(error) {
  console.log("Error: " + error);
})
