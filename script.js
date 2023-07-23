// Ejercicio 1
// 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.
function Mostrarmensaje(message, callback) {
    callback(message);
  }
  
  function consoleWarn(message) {
    console.warn(message);
  }
  
  function consoleLog(message) {
    console.log(message);
  }
  
  function consoleInfo(message) {
    console.info(message);
  }
  
  function ejercicio1() {
    Mostrarmensaje("Este es un mensaje de advertencia.", consoleWarn);
    Mostrarmensaje("este es un mensaje normal por consola.", consoleLog);
    Mostrarmensaje("Este es un mensaje de informacion.", consoleInfo);
  }

  // Ejercicio 2
//   2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof

  function checkVariableType(variable, callback) {
    callback(typeof variable, variable);
    //preguntar porque
    // variablef=(typeof variable)
    // console.log(variablef);
    // console.log(typeof variable);
    // console.log( variable);

  }

 
  function ejercicio2() {
    const variable0 = true;
    const variable1 = "Hello, world!";
    const variable2 = 42;
    const variable3 = [1, 2, 3];
    const variable4=prompt("Digita algo");

    //preguntar porqu eno tioma el typeof
    checkVariableType(variable0, (type, value) => console.log(`Variable: ${value}, Type: ${type}`));
    checkVariableType(variable1, (type, value) => console.log(`Variable: ${value}, Type: ${type}`));
    checkVariableType(variable2, (type, value) => console.log(`Variable: ${value}, Type: ${type}`));
    checkVariableType(variable3, (type, value) => console.log(`Variable: ${value}, Type: ${type}`));
    checkVariableType(variable4, (type, value) => console.log(`Variable: ${value}, Type: ${type}`));
  }

  
  // Ejercicio 3
//   3.- Crear una función que reciba como argumentos, dos números y un callback. Según el callback que se pase a la función, se devuelve la suma de los dos números, la resta de los dos números, la multiplicación de los dos números o división.

  

  const calcular = (a, b, callback) => {
   
    console.log("EL primer argumento: ", a);
    console.log("EL primer argumento: ", b);
    setTimeout(function (){
      callback(a, b); 
    },1000);
    
};

function ejercicio3() {
const suma = (a, b) => console.log("el resultado de la suma es: ",(a + b));
const resta = (a, b) => console.log("el resultado de la resta es: ",(a - b));
const multiplicar = (a, b) => console.log("el resultado de la multiplicacion es: ",(a * b));
const dividir = (a, b) => console.log("el resultado de la division es: ",(a / b));

const numero1=parseInt(prompt("Ingresa el primer numero"));
const numero2=parseInt(prompt("Ingresa el segundo numero"));
const operacion=prompt("Ingresa la operacion a ejecutar suma, resta, multiplicacion, division");
//preguntar porqu eno sive
//console.log(calcular(numero1,numero2,operacion));
console.log(calcular(numero1,numero2,suma));
console.log(calcular(numero1,numero2,resta));
console.log(calcular(numero1,numero2,multiplicar));
console.log(calcular(numero1,numero2,dividir));



}

  // Ejercicio 4
//   4.- Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas.
// ordenSuperior("PejeLagarto", minus); -> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO
  
function cambiarfrase(str, callback) {
    callback(str);
  }
  
  function CambioMinus(str) {
    console.log("frase a minusculas: ",str.toLowerCase());
    return str.toLowerCase();
    
  }
  
  function CambioMayus(str) {
    console.log("frase a mayusculas: ",str.toUpperCase());
    return str.toUpperCase();
  }
  
  function ejercicio4() {
    const str=prompt("digite una frase a cambiar a minusculas y mayusculas")
    //const str = "PejeLagarto";
    console.log("Frase Digitada",str);
    //console.log(cambiarfrase(str, toLowerCase));
    
    cambiarfrase(str, CambioMinus);
    cambiarfrase(str, CambioMayus);
  }
  


  // Exercise 5
//   5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback. en javascript me puedes comentarial el codigo y hacer el html css y javascript  por separado
  function MayorHoras(ArregloMinutos, callback) {
    const filteredArray = ArregloMinutos.filter(Hora => Hora > 120);
    callback(filteredArray);
  }
  
  
  
  function ejercicio5() {
    const ArregloMinutos = [120, 80, 200, 100,320,480,60];
    MayorHoras(ArregloMinutos, result => console.log(result));
  }