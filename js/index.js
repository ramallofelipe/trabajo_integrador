

fetch("https://dummyjson.com/products/category/smartphones")
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  function hola() {
    let popular = data.products[0]
    for (let i=1;i<data.products.length;i++){
        if (data.products[i].rating > popular.rating){
            popular = data.products[i]
        }
    }
    return popular
}
  let productos = document.querySelector('.productos')
  let popular = document.querySelector('.vendido')
  let productos1 = popular.querySelector('.productos')
  let lista = []
  for (let i=5; i<15 ; i++){
      lista.push(`<article>
                     <img class="img" src="${data.products[i].images[0]}" alt="">
                         <h3>${data.products[i].title}</h3>
                            <ul>
                                  <li>${data.products[i].description}</li>
                                
                             </ul>
                  <div><p>$${data.products[i].price}</p></div>
                  <a class="ver" href="product.html?id=${data.products[i].id}">Ver Mas</a>
                </article>`)
  
}
let a = lista.join('')
productos.innerHTML = a
  console.log(a)
  
      
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
   
  let lista1 = []
  lista1.push(primero)
  for (let i=0; i<data.products.length ; i++){
    if (data.products[i].rating > 4 && lista1.length < 11 ){
        lista1.push(`<article>
                     <img class="img" src="${data.products[i].images[0]}" alt="">
                         <h3>${data.products[i].title}</h3>
                            <ul>
                                  <li>${data.products[i].description}</li>
                                
                             </ul>
                  <div><p>$${data.products[i].price}</p></div>
                  <a class="ver" href="product.html?id=${data.products[i].id}">Ver Mas</a>
                </article>`)}
}
lista1.push('</section>')
let b = lista1.join('')
popular.innerHTML = b
console.log(b)
})
.catch(function(error) {
  console.log("Error: " + error);
})
