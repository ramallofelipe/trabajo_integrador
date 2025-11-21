 let recuperoStorage = localStorage.getItem("usuario")
let login = document.querySelector(".menu2")
let oculto = document.querySelector(".oculto")
let logout = document.querySelector(".logout")

logout.addEventListener('click', function(event){
        sessionStorage.clear()
     login.style.display = "line"
     oculto.style.display = "none"
     
     
    
})

