const formulario = document.querySelector("#form")
const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")
const alertSuccess = document.querySelector("#alertSuccess")
const alertEmail = document.querySelector ("#alertEmail")
const alertName = document.querySelector ("#alertName")
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none")
    alertSuccess.textContent = ("Mensaje enviado con exito")
}
const pintarMensajeError = (errores) => {
    errores.forEach(item => {
        item.tipo.classList.remove("d-none")
        item.tipo.textContent = item.msg
    })
}

formulario.addEventListener("submit", e => {
    e.preventDefault ()
    alertSuccess.classList.add("d-none")
    alertName.classList.add("d-none")
    alertEmail.classList.add("d-none")
    userName.classList.remove("is-invalid")
    userName.classList.remove("is-valid")
    userEmail.classList.remove("is-invalid")
    userEmail.classList.remove("is-valid")
    const errores = []
   
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");
    
        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo nombre, solo letras",
        });

    } else {
        userName.classList.add("is-valid")
        
    }
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid")
        errores.push ({
            tipo: alertEmail,
            msg: "Ingrese un Email valido"
          })
    } else {
        userEmail.classList.add("is-valid")
    }

    if (errores.length !==0){
        pintarMensajeError(errores)
        return
    }

    console.log("formulario enviado")
    pintarMensajeExito()
})