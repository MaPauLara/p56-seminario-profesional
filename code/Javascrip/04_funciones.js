var nomapellido='Maria Lara'
var edad =22

//funcion tipo declarativa
function imprimirEdad(nombre, edad) {
    console.log(`${nombre} tiene la edad de ${edad}.`)
}

//funcion tipo flecha
var imprimirEdad2 =(nombre, edad) => {
    console.log(`${nombre} tiene la edad de ${edad}.`)
}

//funcion tipo expresiva
var imprimirEdad3 = function(nombre, edad) {
    console.log(`${nombre} tiene la edad de ${edad}.`)
}

imprimirEdad(nomapellido, edad)
imprimirEdad('Paula Corozo', 23)
imprimirEdad2(nomapellido, edad)
imprimirEdad3('Paula Corozo', 24)