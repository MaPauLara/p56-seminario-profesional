//Especificacion de objetos
var objeto1 = {
    nombre: 'Luis',
    apellido: 'Perez',
    altura: 180,
    cantidadlibros: 20,
}

var objeto2 = {
    nombre: 'Shirley',
    apellido: 'Coque',
    altura: 160,
    cantidadlibros: 200,
}

var objeto3 = {
    nombre: 'Javier',
    apellido: 'Ortiz',
    altura: 170,
    cantidadlibros: 50,
}

var objeto4 = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
    altura: 170,
    cantidadlibros: 50,
}

var objeto5 = {
    nombre: 'Galo',
    apellido: 'Valverde',
    altura: 160,
    cantidadlibros: 60,
}

var personas = [objeto1,objeto2,objeto3,objeto4,objeto5]

for(persona of personas){
    console.log(`${persona.nombre} ${persona.apellido}`)
}

console.log('\n')

for(var i=0; i>personas.length; i++){
    console.log(`${personas[i].nombre} ${personas[i].apellido}`)
}

//Uso de filtros con arreglos
const esAlta = (Objeto) => Objeto.altura > 1.70
var personasAltas =personas.filter(esAlta)

console.log(personasAltas)
for(persona of personasAltas){
    console.log(`${persona.nombre} ${persona.apellido}`)
}

//Uso de la funcion map con arreglos

var sum = 0
for(persona of personas){
    sum += persona.cantidadlibros
}
console.log(`La cantidad de libros en total es ${sum}`)


const contabilizarLibros = (acum,{cantidadlibros}) => acum + cantidadlibros
var totalLibros = personas.reduce(contabilizarLibros, 0)
console.log (`La cantidad de libros en total es ${totalLibros}`)


const pasarAlturasMetros = (Objeto)=>{
    Objeto.altura = Objeto.altura / 100
    return Objeto
}

var personasMetros = []
for (persona of personas) {
    otrasPersonas.push(...persona)
}

otrasPersonas.map(pasarAlturasMetros)
console.log(personas)
console.log(otrasPersonas)


//var personasMetros2 = personas.map(function(){
//    Objeto.altura = Objeto.altura / 100
//    return Objeto
//})

//console.log(personasCm)

//Uso de la funcion reduce en arreglos



