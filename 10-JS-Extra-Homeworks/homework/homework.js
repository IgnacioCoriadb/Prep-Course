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
  
    var arreglosDeMatriz = [];

    arreglosDeMatriz = Object.entries(objeto);
    
  return arreglosDeMatriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

var repetidos ={};
 for(var letra in string){
   
  repetidos[string[letra]] = (repetidos[string[letra]] || 0) +1 

 }
  
 return repetidos;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayusculas=[];
  var minusculas=[];
  var textoInvertido ='';

  for(var i=0; i<s.length; i++){
      if(s[i]=== s[i].toUpperCase()){
          mayusculas.push(s[i]);
      }else{
        minusculas.push(s[i])
      }
  }

  textoInvertido = mayusculas.join('') + minusculas.join('');

  return textoInvertido;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var stringAarray=   str.split(' ');
  var array =[];
  var stringInvertido='';
  //recorro el arreglo de la frase 
  for(var i=0; i<stringAarray.length; i++){
    //separo por palabras y las inserto en el array, voy a tener un array por palabra
    array.push(stringAarray[i].split('').reverse('').join(''));
  }
  
  stringInvertido = array.join(' ');

  return stringInvertido;



} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numeroString = `${numero}`;
  var arreglo = numeroString.split('')
  var numeroInvertido=0;

  numeroInvertido = arreglo.reverse().join('')

  if(numeroInvertido === numeroString){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }

 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var arreglo =cadena.split('');

  var cadena = arreglo.filter(function(cad){
     return cad != 'a' && cad != 'b' && cad != 'c';
  })

  return cadena.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var result =arr.sort(function(a,b){   // are beautiful lookin   b) you are beautiful 
    return  a.length - b.length 
  })

  return result;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray =[];

  for(var key in arreglo1){
    for(var key2 in arreglo2){
      if(arreglo1[key] === arreglo2[key2]){
      nuevoArray.push(arreglo1[key])
      }
    }
  }

  return nuevoArray;
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

