var docente = {
    nombre: 'Maria',
    apellido: 'Lara',
}

var docente2 ={
    nombre:'Dario',
    apellido:'Huilcapi',
}
//Asignacion por paso de valor
var otrodocente ={
    ... docente
}

console.log(docente == docente2)
//Debido a que son objetos diferentes (tienen diferente direccion de memoria)
console.log(docente == otrodocente)

console.log(otrodocente.nombre)

//Esta asignacion es por referencia
docente3 = otrodocente
otrodocente.nombre = 'Luis' 

//Debido a que es el mismo objetos (tienen la misma direccion en memoria)
console.log(docente3 == otrodocente)
console.log(docente3 )
console.log(docente )

