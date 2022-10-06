let colors = require('colors');
const estudiante1 = ["Juan Diego" , 
                    "Juan Camilo " , 
                    "Laura " ,
                    "Nicolas"]

const estudiante2 = [
                    "Enrique" , 
                    "Maicol " , 
                    "Daniela" ,
                    "Julian"
                    ] 
//operador spread(resto)
const estudiante3 = [
                    "Veronica" , 
                    ...estudiante1 , 
                    "Paula" ,
                    ...estudiante2 ]
                
console.log(estudiante3)

// console.log( estudiante1[2])
//Desestructuracion arreglo:
// let [ ,  ,  , e2 ] = estudiante1;
// console.log(e2.bgBrightMagenta.green)



