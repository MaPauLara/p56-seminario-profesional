var docente1 = {
    nombre:'Maria',
    apellido: 'Lara',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'mlarac1@est.ups.edu.ec',

}

var docente2 = {
    nombre:'Paula',
    apellido: 'Corozo',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'pcoroz@est.ups.edu.ec',

}

function imprimirNomMayus(objeto){
    var {nombre} = objeto
    console.log(`${nombre.toUpperCase()} ${objeto.apellido}`)
}

function imprimirNomMin(objeto){
    console.log(`${objeto.nombre.toLowerCase()} ${objeto.apellido}`)
}

function imprimirApeMayus(apellido){
    console.log(`${apellido.toUpperCase()}`)
}

imprimirNomMayus(docente1)
imprimirNomMin(docente1)
imprimirApeMayus(docente2)