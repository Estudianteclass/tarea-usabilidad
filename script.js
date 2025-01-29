// script.js

// Problema: Falta de manejo de eventos básicos y retroalimentación visual
let enviar=document.getElementById("enviar")
enviar.addEventListener('click', function(event) {
   // event.preventDefault(); // Problema: No se avisa al usuario que el formulario no se envió
let form=document.querySelector("form");

for (const element of form.elements) {
    if(element.value==""){
     element.previousElementSibling.style.color="red"
        console.log(element.previousElementSibling)
    
    }else{
         element.previousElementSibling.style.color="black"
    }
}
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;



    if (!name || !email || !message) {
        alert('Por favor, complete todos los campos.'); // Problema: Mensaje genérico y poco informativo
     
       
     
    
    } else {
        console.log('Formulario enviado:', { name, email, message });
        alert('Formulario enviado'); // Problema: No redirige ni proporciona confirmación visual en la página
    
    }
});