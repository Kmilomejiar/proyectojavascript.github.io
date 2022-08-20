function aleatorio(minimo,maximo)
{
    var numero = Math.floor(Math.random() * (maximo - minimo + 1)+ minimo)
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["Piedra ✊", "Papel 🤚​", "Tijera ✌️​", "Lagarto 🤏", "Spock ​🖖"];


var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿Elije una opción para iniciar la partida?\nPiedra ✊: 0\nPapel 🤚: 1\nTijera ✌️: 2\nLagarto 🤏: 3\nSpock 🖖: 4 \nEscribe tu opcion aqui")

alert("Elegiste " + opciones[opcionUsuario]);
alert("JavaScript eligió " + opciones[opcionMaquina]);

if (opcionUsuario == piedra)
{
    
    if(opcionMaquina == piedra)
    {
        alert("Piedra y Piedra Empate... 😵​");
    }
    else if (opcionMaquina == papel)
    {
        alert("Papel envuelve Piedra Perdiste... ​😭​​");
    }
    else if (opcionMaquina == tijera)
    {
        alert("Piedra rompe Tijera Ganaste... 🥳​​");
    }
    else if (opcionMaquina == lagarto)
    {
    alert("Piedra aplasta Lagarto Ganaste... 🥳​​");
    }
    else if (opcionMaquina == spock)
alert("Spock vaporiza Piedra Perdiste... 😭​");
}


    else if (opcionUsuario == papel)
{
   
    if(opcionMaquina == piedra)
{
    alert("Papel envuelve Piedra Ganaste... 🥳​");
}
    else if (opcionMaquina == papel)
{
    alert("Papel y Papel Empate... 😵");
}
    else if (opcionMaquina == tijera)
{
    alert("Tijera rompe Papel Perdiste... 😭");
}
    else if (opcionMaquina == lagarto)
{
    alert("Lagarto come Papel Perdiste... 😭");
}
    else if (opcionMaquina == spock)
{
    alert("Papel desaprueba Spock Ganaste... 🥳");
}
}


    else if (opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
{
    alert("Piedra rompe Tijera Perdiste... 😭");
}
    else if (opcionMaquina == papel)
{
    alert("Tijera rompe Papel Ganaste... 🥳");
}
    else if (opcionMaquina == tijera)
{
    alert("Tijera y Tijera Empate... 😵");
}
    else if (opcionMaquina == lagarto)
{
    alert("Tijera decapita Lagarto Ganaste... 🥳");
}
else if (opcionMaquina == spock)
{
    alert("Spock vaporiza Tijera Perdiste... 😭");
}
}

else if (opcionUsuario == lagarto)
{
    if(opcionMaquina == piedra)
{
    alert("Piedra aplasta Lagarto Perdiste... 😭");
}
    else if (opcionMaquina == papel)
{
    alert("Lagarto come Papel Ganaste... 🥳");
}
    else if (opcionMaquina == tijera)
{
    alert("Tijera decapita Lagarto Perdiste... 😭");
}
    else if (opcionMaquina == lagarto)
{
    alert("Lagarto y Lagarto Empate... 😵");
}
else if (opcionMaquina == spock)
{
    alert("Lagarto envenena a Spock Ganaste... 🥳");
}
}

else if (opcionUsuario == spock)
{
    if(opcionMaquina == piedra)
{
    alert("Spock vaporiza Piedra Ganaste... 🥳");
}
    else if (opcionMaquina == papel)
{
    alert("Papel desaprueba Spock Perdiste... 😭");
}
    else if (opcionMaquina == tijera)
{
    alert("Spock vaporiza Tijera Ganaste... 🥳");
}
    else if (opcionMaquina == lagarto)
{
    alert("Lagarto envenena a Spock Perdiste... 😭");
}
else if (opcionMaquina == spock)
{
    alert("Spock y Spock Empate... 😵");
}
}

else {
    alert("¿Nos vas a jugar 🙃? \nElige una opcion para poder jugar");
}
