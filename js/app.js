// verifica que el campo no este vacio y que se haya proporcionado un correo valido
registrado = () => {
    let verificar = document.getElementById("registro").value;
    let verificado = document.getElementById("registro");
    if (verificar != "") {
        localStorage.setItem('correoRegistrado', extraeCorreo());
        document.getElementById("cuerpo").innerHTML = nuevo();
        return true;
    }else if (verificar == "") {
        alert("El campo no puede estar vacio")
        verificado.style.backgroundColor = "#FFD5CF"
        verificado.style.border = "2px solid #FF574C"
        return false;
    }else {
        alert("El campo no puede estarvacio ni nada por el estilo")
        let verificado = document.getElementById("registro");
        verificado.style.backgroundColor = "#FF574C";
        return false;
    }
}

// abre la pagina de nuevo registro
nuevo = () => {
    window.location.href = "registro.html"
    extraeCorreo()
}

// extrae el correo del index.html
extraeCorreo = () => {
    let correoElement = document.getElementById("registro");
    if (correoElement) {
        let correo = correoElement.value;
        console.log("Correo extraído", correo);
        return correo;
    } else {
        console.error("Elemento con ID 'registro' no encontrado");
        return null;
    }
}

window.onload = () => {
    muestraCorreo();
};

muestraCorreo = () => {
    let obtieneCorreo = localStorage.getItem('correoRegistrado');
    if (obtieneCorreo) {
        let correo = document.createElement("p");
        correo.innerHTML = `
            A confirmation email has been sent to<br>
            <strong>${obtieneCorreo}</strong>. Please open it and click<br/>
            the button inside to confirm subscribing.
        `;
        let contenido = document.getElementById("texto");
        contenido.appendChild(correo);
    }
}

regreso = () => {
    window.location.href = "index.html";
}

regresar = () => {
    let boton = document.getElementById("btn-confirm");
    document.getElementById("registro-good").innerHTML = regreso();
    return true;
}