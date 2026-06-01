document
.getElementById("formReserva")
.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre =
        document.getElementById("nombre").value;

    alert(
        "Gracias " +
        nombre +
        ", su reserva fue registrada correctamente."
    );

    this.reset();

});