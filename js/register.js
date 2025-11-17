let formulario = document.querySelector(".form")
let email = document.querySelector("#email")
let contra = document.querySelector("#password")
let recontra = document.querySelector("#repassword")
let terminos = document.querySelector(".cua")

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    if (email.value == ""){
        let invalid = document.querySelector(".email")
        invalid.innerText = "Es obligatorio completar este campo"
        invalid.style.display = 'block'
    } else if (contra.value == ""){
        let invalid = document.querySelector(".password")
        invalid.innerText = "Es obligatorio completar este campo"
        invalid.style.display = 'block'
    } else if (contra.value.length <= 6){
        let invalid = document.querySelector(".password")
        invalid.innerText = "La contraseña debe tener al menos 6 caracteres"
        invalid.style.display = 'block'
    } else if (recontra.value == ""){
        let invalid = document.querySelector(".repassword")
        invalid.innerText = "Es obligatorio completar este campo"
        invalid.style.display = 'block'
    } else if (recontra.value != contra.value){
        let invalid = document.querySelector(".repassword")
        invalid.innerText = "No es igual a la contraseña ingresada"
        invalid.style.display = 'block'
    } else{
        this.submit()
    }
    
    
    
    
})
