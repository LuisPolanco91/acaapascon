// Cuando el usuario hace scroll hacia abajo 20px desde la parte superior de la página, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const backToTopBtn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, vuelve al principio de la página
document.getElementById("back-to-top-btn").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// Inicializar EmailJS para inplementar el formulario de contacto con nuestro servicio de correo
function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email_id").value,
        contact_id: document.getElementById("contact_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_qptyve8", "template_67um9bk", params).then(function (res) {
        console.log("success", res.status);
        alert("Mensaje enviado exitosamente!");
        document.getElementById("contactForm").reset();
        // Mostrar mensaje de confirmación
        document.getElementById("confirmationMessage").style.display = "block";
    }

    ).catch(function (error) {
        console.log("Error al enviar el mensaje", error);
        alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    });
    // Limpiar el formulario después de enviar
    document.getElementById("contactForm").reset();
    
}



//Formulario de contacto
/*
function mostrarCampos () {
    let seleccion = document.getElementById("tipoServicio").value;
    let campoContacto = document.getElementById("campoContacto");
    let campoDireccion = document.getElementById("campoDireccion");
    let campoAcometida = document.getElementById("campoAcometida");
    let campoTitular = document.getElementById("campoTitular");
    let campoArchivo = document.getElementById("campoArchivo");
    let campoMensaje = document.getElementById("campoMensaje");

    // Ocultar todos los campos primero
    campoContacto.classList.add("d-none");
    campoDireccion.classList.add("d-none");
    campoAcometida.classList.add("d-none");
    campoTitular.classList.add("d-none");
    campoArchivo.classList.add("d-none");
    campoMensaje.classList.add("d-none");

    //Mostrar los campos según la opción seleccionada
    if (seleccion === "contratar") {
        campoContacto.classList.remove("d-none");
        campoDireccion.classList.remove("d-none");
        campoMensaje.classList.remove("d-none");
    }
    if (seleccion === "reportar") {
        campoAcometida.classList.remove("d-none");
        campoTitular.classList.remove("d-none");
        campoContacto.classList.remove("d-none");
        campoArchivo.classList.remove("d-none");
        campoMensaje.classList.remove("d-none");
    }
}

// Enviar formulario por AJAX
function enviarFormulario(event) {
    event.preventDefault(); // Evita que la página se recargue

    let formData = new FormData(document.getElementById("contactForm"));

    fetch("sendmail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "success") {
            alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.");
            document.getElementById("contactForm").reset();
        } else {
            alert("Hubo un error al enviar el mensaje, Intenta de nuevo.");
        }
    })
    .catch(error => console.error("Error:", error));
}

*/

