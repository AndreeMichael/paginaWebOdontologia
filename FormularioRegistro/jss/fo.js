const nombre = document.getElementById("name")
const apellido = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
	e.preventDefault()
	let warnings =""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
	parrafo.innerHTML = ""
if(nombre.value.length <6){
	
	warnings += `El Nombre es muy corto <br>`
	entrar = true
}
if(apellido.value.length <5){
	
	warnings += `El Apellido es muy corto<br>`
	entrar = true
}
if(!regexEmail.test(email.value)){

	warnings += `El Correo no es valido <br>`
	entrar = true
}
if(pass.value.length < 8){
	warnings += `La Contraseña es muy corto<br>`
	entrar = true
}
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        //opcion 1parrafo.innerHTML = "Enviado";
        var msg= "Enviado"
        alert(msg);
        
    //returna a la primera pagina despues de 2 intentos
     let btn = document.querySelector('button');   
     btn.addEventListener('click',()=>{
                      window.history.back();   
                         });      
        
    }
  
})

