const use = require('./network')
const storage = require('./storage')

function addRepresentante_legal(cedula, nombre, apellido, correo_electronico, telefono) {
    return new Promise( (resolve, reject) => {
        if (!cedula) {
            console.error('[MensajeControlado] No hay Representante legal.')
            return reject('No existe Representante legal.')
        }
        // Se crea un objeto Representante Legal
        const fullRepresentante_legal = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
            telefono: telefono,
            fecha_creacion: new Date(),
        }
        console.log( fullRepresentante_legal )
        storage.add( fullRepresentante_legal )
        return resolve( fullRepresentante_legal )
    })
}

function updateRepresentante_legal(id_representante_legal, cedula, nombre, apellido, correo_electronico, telefono) {
    return new Promise( async (resolve, reject) => {
        if (!id_representante_legal) {
            reject(  'No existe ID.' )
        }
        const fullRepresentante_legal = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
            telefono: telefono,
        }
        const result = await storage.update( id_representante_legal, fullRepresentante_legal )
        resolve( result )
    } )
}

function getRepresentante_legal( filtroRepresentante_legal ) {
    return new Promise((resolve, reject) => {
        resolve( storage.list( filtroRepresentante_legal ) )
    })
}

function deleteRepresentante_legal(id_representante_legal) {
    return new Promise( (resolve, reject) => {
        if (!id_representante_legal) {
            reject('No existe representante_legal.')
        }
        storage.remove(id_representante_legal)
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    } )
}

module.exports = {
    addRepresentante_legal,
    getRepresentante_legal,
    updateRepresentante_legal,
    deleteRepresentante_legal,
}