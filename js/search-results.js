let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let resultado = queryStringObj.get('search'); 


fetch(`https://dummyjson.com/products/search?q=${resultado}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let titulo = document.querySelector("h1")
  let res = document.querySelector(".productos2")
  let lista = []
  console.log(data.products.length)
  titulo.innerText = `Resultado de la busqueda: ${resultado}`
    if(data.products.length == 0){
        titulo.innerText = `No se han encontrado resultados`
    } else {
        for (let i=0; i<data.products.length ; i++){
        lista.push(`<article><img class="img" src="${data.products[i].images[0]}">
                <h3>${data.products[i].title}</h3>
                <ul>
                    <li>${data.products[i].description}</li>
                </ul>
                <div><p>$${data.products[i].price}</p></div>
                <a class="ver" href="product.html?id=${data.products[i].id}">Ver Mas</a></article>`)}
}
let a = lista.join('')
console.log(a)
res.innerHTML = a
})

.catch(function(error) {
  console.log("Error: " + error);
})
