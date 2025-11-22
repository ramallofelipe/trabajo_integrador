let logout = document.querySelector("#logout")
let login1 = document.querySelector(".menu2")
let oculto1 = document.querySelector(".oculto")
console.log(logout)
logout.addEventListener('click', function(){
     localStorage.removeItem("usuario")
     login1.style.display = "flex"
     oculto1.style.display = "none"
})

