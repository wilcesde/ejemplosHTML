function mostrarMensajeIf() {
    var edad = parseInt(document.getElementById("edad").value);

    const edadMinina = 18;
    let mensaje = "";

    //If Compuesto
    // if (edad >= edadMinina) {
    //     mensaje = "Sos mayor de edad. Very Good!!!";
    // } else {
    //     mensaje = "Sos menor de edad. Sorry!!!";
    // }

    //If Compuesto de otra forma (Con el Literal ?)
    mensaje = (edad >= edadMinina) ? "Sos mayor de edad. Very Good!!!":"Sos menor de edad. Sorry!!!";

    alert(mensaje);
}

function mostrarMensajeIfAnidado() {
    var estatura = parseFloat(document.getElementById('estatura').value)
    var peso = parseFloat(document.getElementById('peso').value)
    var estadoCivil = document.getElementById('estadoCivil').value

    const parametroEstatura = 1.30
    const parametroPeso = 100
    const parametroEstadoCivil = "soltero"

    let resultado = ""

    //If anidado
    // if (estatura >= parametroEstatura) {
    //     if (peso <= parametroPeso) {
    //         if (estadoCivil == parametroEstadoCivil) {
    //             resultado = "Saludable"
    //         } else {
    //             resultado = "No saludable. No es soltero"
    //         }
    //     } else {
    //         resultado = "No saludable. Peso muy elevado"
    //     }
    // } else {
    //     resultado = "No saludable. Talla no adecuada"
    // }

    //If con AND(&&)
    // if (estatura>=parametroEstatura && peso<=parametroPeso && estadoCivil==parametroEstadoCivil) {
    //    resultado = "Saludable"
    // } else {
    //     resultado = "No saludable"
    // }

    //If con OR(||)
    if (estatura>=parametroEstatura || peso<=parametroPeso || estadoCivil==parametroEstadoCivil) {
        resultado = "Saludable"
     } else {
         resultado = "No saludable"
     }

    document.write(resultado)

}