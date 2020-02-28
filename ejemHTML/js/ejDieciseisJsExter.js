function mostrarAreaTriangulo() {
    //Recibir los datos (Leerlos)
    var base = parseInt(document.getElementById('base').value)
    var altura = parseInt(document.getElementById('altura').value)

    //Procesar los datos (Realizar calculos)
    let resultado = base * altura / 2

    //Entregar (mostrar) los resultados
    document.getElementById('resultadoAT').innerHTML = resultado
}

function mostrarAreaCirculo() {
    //Recibir los datos
    var radio = parseFloat(document.getElementById('radio').value)

    const pi = Math.PI
    const potenciaRadio = radio * radio

    //Procesar los datos
    let resultado = pi * potenciaRadio

    //Entregar (mostrar) resultados
    document.getElementById('resultadoAC').innerHTML = resultado
}