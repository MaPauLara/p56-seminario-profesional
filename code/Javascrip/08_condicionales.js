var persona= {
    nombre: 'Luis',
    apellido: 'Perez',
    edad: 25,
    universidad: 'Universidad Poitecnica Salesiana',
    correo_electronico: 'lperez@est.ups.edu.ec',
    ingeniero: true,
    master: false,
    doctor: false
}

function imprimirPersona(onjeto){
    console.log(`${objeto.nombre} ${objeto.apellido}`)
    console.log(`Edad: ${objeto.edad} años.`)
    console.log(`Universidad: ${objeto.universidad}`)
    console.log(`Correo electronico: ${objeto.correo_electronico}`)
    if(objeto.ingeniero){
        console.log(`Es Ingeniero. `)
    }
    if(objeto.master){
        console.log(`Es Magister. `)
    }
    if(objeto.doctor){
        console.log(`Es Doctor. `)
    }   
}
//swich
opcion = 2

switch(opcion){
    case 1:
        console.log('Caso 1')
        break
    case 2:
        console.log('Caso 2')
        break
            
}

imprimirPersona(persona)