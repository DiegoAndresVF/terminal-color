function mostrarEstado(estado) {
    switch(estado) {
        case "inicio":
            console.log("inicio del programa");
            break;
        case "proceso":
            console.log("proceso en ejecución");
            break;
        case "final":
            console.log("finalización exitosa.");
            break;
        default:
            console.log("opcion invalida");
    }
}

mostrarEstado("proceso")
