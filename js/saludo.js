let recuperoStorage = localStorage.getItem("usuario")
let login = document.querySelector(".menu2")
let oculto = document.querySelector(".oculto")

console.log(recuperoStorage)
if (recuperoStorage) {
     login.style.display = "none"
     oculto.style.display = "flex"
     oculto.style.flexDirection = "row"
     
     oculto.innerHTML = `<li class="amenu"><a class="tmenu" >Bienvenido ${recuperoStorage}</a></li>
                <li class="amenu"><a class="tmenu" id="logout" href="">Log out</a></li>`
}