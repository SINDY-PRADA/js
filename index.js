
//traer la dependencia del
import { sumar, restar } from './sumar.js'
import estudiantes from './materias.js'
import materias from './materias.js'

// //let: variables
// let a = 10
// //conts: constantes
// const b = 29
// console.log(`sumar de a-b:${ sumar(a , b) }`)

// //desestructuración:
// let {id, first_name ,  last_name , DNI} = estudiantes

// console.log(`Idestudiante: ${ id }`)
// console.log(`Nombre estudiante: ${ first_name }`)
// console.log(`Apellido estudiante: ${ last_name }`)
// console.log(`DNI estudiante: ${ DNI }`)

//1. Recorridode arreglo: forEach 
materias.forEach((materia)=> {
    if(materia.profesor === 'Cristian Buitrago'){
    console.log( `materia: ${materia.name}`)
    console.log( `materia: ${materia.notas}`)
    }
})
//2 convertir a un arreglo de profesores
let profesores = materias.map(function(materia){
    return materia.profesor
})

//3. Agregar una materia 
//push()
materias.push(
    {
        id: 4,
        name: "Cultura fisica",
        profesor: "Miguel Baquero",
        notas: [
            2,
            3.5
        ]

    }
)

//4. Busqueda 
//find 
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})

console.log(PHP)

// console.log(`Idestudiante: ${ id }`)
// console.log(`Nombre estudiante: ${ first_name }`)
// console.log(`Apellido estudiante: ${ last_name }`)
// console.log(`DNI estudiante: ${ DNI }`)