var nombre = "Jaime";

alert(nombre); //muestra un mensaje dentro de la pagina

nombre = prompt("Ingrese su nombre", "Valor");
//ventana semejante donde el usuario puede colocar informacion

document.write("tu nombre es: " + nombre); //funcion para colocar informacion dentro de la pagina
//para concatenar texto con variables o mas texto se usa el simbolo + 

console.log(nombre);
/*
	Los navegadores web tienen integrada una consola similar a cmd en windows o terminal en linux o mac.

	La funcion log permite el colocar contenidos denntro de la consola del navegador
*/

//Las variales pueden almacenar numeros enteros, decimales, caracteres, booleanos
var numero = 21 + 2;
var decimal = 12.36;
//Dentro de las variables y las funciones tambien se pueden efectuar operaciones

document.write(" el valor de numero es: " + numero + " y el de decimal es: " + (decimal * 2));
//es necesario que se coloque parentesis dentro de la operacion para que esta se efectue primero
