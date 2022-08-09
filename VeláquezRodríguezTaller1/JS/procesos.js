var aleatorio =  1+Math.floor(Math.random()*100);
var cont = 1;
var datos = [];

// function comparar(){
//     var numero = document.getElementById("numero").value;

//     if(numero < 1 || numero > 100){
//         document.getElementById("mensaje").innerHTML= "Escribir un numero dentro del rango...";
//     }else if(numero == aleatorio){
//         document.getElementById("mensaje").innerHTML="FELICIDADES, LO ENCONTRASTE!!!!";
//     }else if(numero < aleatorio){
//         document.getElementById("mensaje").innerHTML= "El numero es mayor al ingresado...";
//         datos.push(numero);
//         ++cont;
//     }else if(numero > aleatorio){
//         document.getElementById("mensaje").innerHTML= "El numero es menor al ingresado...";
//         datos.push(numero);
//         ++cont;
//     }
    
    

// }

console.log(aleatorio);


function inic(){

    do {
        numero = prompt("Digita el numero!!!");
        if(numero != aleatorio){
            cont += 1;
            datos.push(numero);

            if(numero < 1 || numero > 100){
                numero= prompt("Escribir un numero dentro del rango...");
            }else if(numero == aleatorio){
                document.getElementById("mensaje").innerHTML= "FELICIDADES, LO ENCONTRASTE!!!!";
            }else if(numero < aleatorio){
                numero= prompt("El numero es mayor al ingresado...");
            }else if(numero > aleatorio){
                numero= prompt("El numero es menor al ingresado...");
        
            }
        }
        
    } while (numero != aleatorio);

    


    if(cont==1){
        document.getElementById("nivel").innerHTML= "Sobresaliente";
    }else if(cont > 1 && cont < 4){
        document.getElementById("nivel").innerHTML= "Notable";
    }else if(cont >= 4 && cont < 11){
        document.getElementById("nivel").innerHTML= "Muy Bien";
    }else if(cont >=11 && cont < 25){
        document.getElementById("nivel").innerHTML= "Regular";
    }else if(cont > 25){
        document.getElementById("nivel").innerHTML= "Pésimo";
    }



}

console.log(cont);
console.log(datos.length);

window.onload = inic();




