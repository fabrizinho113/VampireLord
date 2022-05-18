// Para lograr que se pudiera ver el html con el css incluido, busque distintas formas y encontre el siguiente comando para lograrlo.
// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {


// Bienvenida
alert('Bienvenido/a a Vampire Lord! Este es un simulador sencillo donde tendras tres opciones: \n\n  -Pelear: Basicamente pelearas contra 4 enemigos en distintas dificultades. Se tira un dado para determinar si ganas, empatas o pierdes. \n\n -Minijuegos: Juego de dados y una adivinanza. \n\n -Tienda: Ver una lista de items y elegir cual comprar. (Para este algoritmo tendras dinero ilimitado. Los items no afectan en nada aun)');


do {
    let menu = menuPrincipal();
    let operacion = operaciones(menu);

} while (continuar() == 1);


// Menu 
function menuPrincipal() {
    let opcion;

    do{
        opcion = parseInt(prompt(`Menu: \n 1- Pelear \n 2- Minijuegos \n 3- Tienda`));
    } while (opcion != 1 && opcion != 2 && opcion != 3);

    if (opcion == 1) {return "pelear";}
    if (opcion == 2) {return "minijuegos";}
    if (opcion == 3) {return "tienda";}
} 

// Llamada de cada funcion
function operaciones(menu) {

    switch(menu){
        case "pelear":
            pelear();
            break;
        case "minijuegos":
            minijuego();
            break;
        case "tienda":
            tienda();
            break;
    }
}


//           Pelear y eleccion de enemigo
function pelear() {
    let pelea;

    do{
        pelea = prompt('Elige tu oponente: \n 1- Goblin (Normal) \n 2- Ogro (Dificil) \n 3- Dragon (Muy dificil) \n 4- Inflacion Argentina (Imposible)')
    } while (pelea != 1 && pelea != 2 && pelea != 3 && pelea != 4)
    

    //Goblin
    if (pelea == 1) {
        let dado;
        let goblin = 2;
 
        dado = Math.floor(Math.random(1)*6);
    
        if (dado > goblin) {
            alert(`Ganaste la pelea! Rolleaste ${dado} y tu oponente rolleo ${goblin}`);
            alert('Has ganado 8 puntos de experiencia.');
        }else if(dado = goblin){
            alert(`Empate! Rolleaste ${dado} y tu oponente rolleo ${goblin}`);
        } else {
            alert(`Perdiste la pelea, la pelea mas facil del algoritmo.... \n Rolleaste ${dado} y tu oponente rolleo ${goblin}`);
        }
    }

    //Ogro
    if (pelea == 2) {
        let dado;
        let ogro = 3;
 
        dado = Math.floor(Math.random(1)*6);
    
        if (dado > ogro) {
            alert(`Ganaste la pelea! Rolleaste ${dado} y tu oponente rolleo ${ogro}`);
            alert('Has ganado 13 puntos de experiencia.');
        }else if(dado = ogro){
            alert(`Empate! Rolleaste ${dado} y tu oponente rolleo ${ogro}`);
        }else {
            alert(`Perdiste la pelea! \n Rolleaste ${dado} y tu oponente rolleo ${ogro}`);
        }
    }

    //Dragon
    if (pelea == 3) {
        let dado;
        let dragon = 4;
 
        dado = Math.floor(Math.random(1)*6);
    
        if (dado > dragon) {
            alert(`Ganaste la pelea! Rolleaste ${dado} y tu oponente rolleo ${dragon}`);
            alert('Has ganado 17 puntos de experiencia.');
        } else if(dado = dragon){
            alert(`Empate! Rolleaste ${dado} y tu oponente rolleo ${dragon}`);
        } else {
            alert(`Perdiste la pelea! \n Rolleaste ${dado} y tu oponente rolleo ${dragon}`);
        }
    }

    // Inflacion
    if (pelea == 4) {
        let dado;
        let inflacion = 99;
 
        dado = Math.floor(Math.random(1)*6);
    
        if (dado > inflacion) {
            alert(`Ganaste la pelea! Rolleaste ${dado} y tu oponente rolleo ${inflacion}`);
            alert('Has ganado 999 puntos de experiencia.');
        } else {
            alert('Perdiste la pelea aunque no te desanimes. Ya era imposible de ganar desde el principio.');
        }
    }
}

// Minijuego de adivinar y dados

function minijuego(){
    let minijuego;

    do{
        minijuego = prompt('Elige el tipo de minijuego: \n 1- Dados \n 2- Acertijo')
    } while (minijuego!= 1 && minijuego != 2);

    // Dados
    if(minijuego == 1){
        let dadoUno;
        let dadoDos;

        dadoUno = Math.floor(Math.random(1)*6);
        dadoDos = Math.floor(Math.random(1)*6);

        if(dadoUno > dadoDos) {
            alert(`Tu dado rolleo: ${dadoUno} \n El dado de tu oponente rolleo: ${dadoDos} \n Ganaste!`);
        } else if (dadoUno = dadoDos) {
            alert(`Tu dado rolleo: ${dadoUno} \n El dado de tu oponente rolleo: ${dadoDos} \n Empate!`);
        } else {
            alert(`Tu dado rolleo: ${dadoUno} \n El dado de tu oponente rolleo: ${dadoDos} \n Perdiste!`);
        }

    }

    // Adivinar
    if(minijuego == 2){
        let acertijo;

        do{
            acertijo = prompt('Cual es mi color favorito? \n 1- Azul \n 2- Rojo \n 3- Amarillo');
        } while(acertijo != 1 && acertijo != 2 && acertijo != 3);
        
        if(acertijo == 1) {alert('Perdiste');}
        if(acertijo == 2) {alert('Ganaste');}
        if(acertijo == 3) {alert('Perdiste');}

    }
}


// Tienda
function tienda(){
    let tienda;

    // Dinero se reinicia cada vez que se entra y sale de la funcion (su valor no cambiara). Solo le asigne un valor para probar distintos metodos.
    let dinero = 10;

    do{
        tienda = prompt(`Tienda: \n Dinero disponible: ${dinero}G \n 1- Pocion de vida (10G) \n 2- Espada (10G) \n 3- Escudo (10G) \n`)
    } while (tienda!= 1 && tienda != 2 && tienda != 3 && tienda != 4);

    if (tienda == 1) {
        if(dinero >= 10){
            dinero = dinero - 10;
            alert('Compraste una pocion!')
        } else {
            alert('No tienes el dinero suficiente');
        }
    }

    if (tienda == 2) {
        if(dinero >= 10){
            dinero = dinero - 10;
            alert('Compraste una espada!')
        } else {
            alert('No tienes el dinero suficiente');
        }
    }

    if (tienda == 3) {
        if(dinero >= 10){
            dinero = dinero - 10;
            alert('Compraste un escudo!')
        } else {
            alert('No tienes el dinero suficiente');
        }
    }
}

// Validacion
function continuar() {
    return (prompt('Quiere hacer otra accion? \n 1- Si \n 2- No'));
}

});