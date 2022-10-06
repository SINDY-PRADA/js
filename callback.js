function imprimir ( c ) {
    console.log(c)
}

//callback: funcion a ejeciutar dentro de sumar
function sumar(a , b , callback){
    suma = a + b
    callback(suma)
}

let resultaado=0;
//ejecutar: llamar a sumar 
sumar(7, 8 ,imprimir)