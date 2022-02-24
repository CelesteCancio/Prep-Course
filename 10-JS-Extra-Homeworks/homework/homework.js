// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arreglo = [];
  for (clave in objeto){
    let subArreglo = [];
    //subArreglo[0] = '"' + clave + '"';
    subArreglo[0] = clave;
    subArreglo[1] = objeto[clave];
    arreglo.push(subArreglo);
  }
  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let objetoCantidadCaracteres = {};
  for (let i=0; i<string.length; i++){
    let caracterActual = string[i];
    if (caracterActual in objetoCantidadCaracteres){
      objetoCantidadCaracteres[caracterActual]++;
    }
    else{
      objetoCantidadCaracteres[caracterActual] = 1;
    }        
  }
  return objetoCantidadCaracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let sMayusculas = s.split("").filter(letra => letra === letra.toUpperCase())
  let sMinusculas= s.split("").filter(letra => letra !== letra.toUpperCase());
  let sOrdenado = [...sMayusculas,...sMinusculas];
  return sOrdenado.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  // let fraseAlReves = "";
  // let palabraAlDerecho = "";
  // let palabraAlReves = "";
  // let j=0;
  // for (let i=0; i<str.length; i++){
  //   if(str[i] !== " " && (i !== (str.length-1))){
  //     palabraAlDerecho += str[i];
  //     //console.log(palabraAlDerecho);
  //   }
  //   else if (i === (str.length-1)){
  //     palabraAlDerecho += str[i];
  //   }
  //   else{
      
  //     //console.log(palabraAlDerecho);
  //     for (let b=palabraAlDerecho.length-1; b>=0; b--){
  //         palabraAlReves += palabraAlDerecho[b];
  //         console.log(palabraAlReves);
  //     }
  //     fraseAlReves += palabraAlReves;
  //     if(i!==(str.length-1)){
  //       fraseAlReves += " ";
  //     }
  //     console.log(fraseAlReves); 
  //     palabraAlDerecho = "";
  //     palabraAlReves = ""; 
               
  //   }
  // }
  // return fraseAlReves;

  let strPasadoAArrayRevertido = str.split(" ").map(subArr => subArr.split("").reverse().join(""));
  return strPasadoAArrayRevertido.join(" ");

 } 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroString = numero.toString();
  for (let i=0; i<numeroString.length; i++){
    if (numeroString[i] !== numeroString[numeroString.length-1-i]){
      return "No es capicua";
    }
  }
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaFiltrada = "";
  for (let i=0; i<cadena.length; i++){
    if (cadena[i] !== "a" && cadena[i]!== "b" && cadena[i]!=="c"){
      cadenaFiltrada += cadena[i];
    }
  }
  return cadenaFiltrada;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort ((a,b) => a.length - b.length);
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arregloInterseccion = [];
  //da igual sobre cual array se aplique el filter xq se van a comparar todos con todos de cualquier manera.
  arregloInterseccion = arreglo2.filter (numeroArreglo2 => arreglo1.indexOf(numeroArreglo2)>=0);
  return arregloInterseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

