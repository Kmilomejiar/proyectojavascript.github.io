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
var opciones = ["Piedra β", "Papel π€β", "Tijera βοΈβ", "Lagarto π€", "Spock βπ"];


var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("ΒΏElije una opciΓ³n para iniciar la partida?\nPiedra β: 0\nPapel π€: 1\nTijera βοΈ: 2\nLagarto π€: 3\nSpock π: 4 \nEscribe tu opcion aqui")

alert("Elegiste " + opciones[opcionUsuario]);
alert("JavaScript eligiΓ³ " + opciones[opcionMaquina]);

if (opcionUsuario == piedra)
{
    
    if(opcionMaquina == piedra)
    {
        alert("Piedra y Piedra Empate... π΅β");
    }
    else if (opcionMaquina == papel)
    {
        alert("Papel envuelve Piedra Perdiste... βπ­ββ");
    }
    else if (opcionMaquina == tijera)
    {
        alert("Piedra rompe Tijera Ganaste... π₯³ββ");
    }
    else if (opcionMaquina == lagarto)
    {
    alert("Piedra aplasta Lagarto Ganaste... π₯³ββ");
    }
    else if (opcionMaquina == spock)
alert("Spock vaporiza Piedra Perdiste... π­β");
}


    else if (opcionUsuario == papel)
{
   
    if(opcionMaquina == piedra)
{
    alert("Papel envuelve Piedra Ganaste... π₯³β");
}
    else if (opcionMaquina == papel)
{
    alert("Papel y Papel Empate... π΅");
}
    else if (opcionMaquina == tijera)
{
    alert("Tijera rompe Papel Perdiste... π­");
}
    else if (opcionMaquina == lagarto)
{
    alert("Lagarto come Papel Perdiste... π­");
}
    else if (opcionMaquina == spock)
{
    alert("Papel desaprueba Spock Ganaste... π₯³");
}
}


    else if (opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
{
    alert("Piedra rompe Tijera Perdiste... π­");
}
    else if (opcionMaquina == papel)
{
    alert("Tijera rompe Papel Ganaste... π₯³");
}
    else if (opcionMaquina == tijera)
{
    alert("Tijera y Tijera Empate... π΅");
}
    else if (opcionMaquina == lagarto)
{
    alert("Tijera decapita Lagarto Ganaste... π₯³");
}
else if (opcionMaquina == spock)
{
    alert("Spock vaporiza Tijera Perdiste... π­");
}
}

else if (opcionUsuario == lagarto)
{
    if(opcionMaquina == piedra)
{
    alert("Piedra aplasta Lagarto Perdiste... π­");
}
    else if (opcionMaquina == papel)
{
    alert("Lagarto come Papel Ganaste... π₯³");
}
    else if (opcionMaquina == tijera)
{
    alert("Tijera decapita Lagarto Perdiste... π­");
}
    else if (opcionMaquina == lagarto)
{
    alert("Lagarto y Lagarto Empate... π΅");
}
else if (opcionMaquina == spock)
{
    alert("Lagarto envenena a Spock Ganaste... π₯³");
}
}

else if (opcionUsuario == spock)
{
    if(opcionMaquina == piedra)
{
    alert("Spock vaporiza Piedra Ganaste... π₯³");
}
    else if (opcionMaquina == papel)
{
    alert("Papel desaprueba Spock Perdiste... π­");
}
    else if (opcionMaquina == tijera)
{
    alert("Spock vaporiza Tijera Ganaste... π₯³");
}
    else if (opcionMaquina == lagarto)
{
    alert("Lagarto envenena a Spock Perdiste... π­");
}
else if (opcionMaquina == spock)
{
    alert("Spock y Spock Empate... π΅");
}
}

else {
    alert("ΒΏNos vas a jugar π? \nElige una opcion para poder jugar");
}
