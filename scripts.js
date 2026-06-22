function Reservar() 
{
    document.getElementById("mensaje").innerHTML = "Reserva realizada";
}

function Mostrar() 
{
    const categorias = [" Conciertos", "Ferias", "Deportes"];

    let contenido = "<h3>Categorías disponibles:</h3><ul>";

    categorias.forEach(categoria => { contenido += `<li>${categoria}</li>`; });

    contenido += "</ul>";

    document.getElementById("categorias").innerHTML = contenido;
}