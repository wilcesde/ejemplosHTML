function prenderApagarBombilla(interruptor) {
    var pic;

    if (interruptor == 0) {
        pic = "imagenes/bombillaOff.gif";
    } else {
        pic = "imagenes/bombillaOn.gif";
    }

    document.getElementById('bombilla').src = pic;
}