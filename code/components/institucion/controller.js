const use = require('./network')
const storage = require('./storage')

function addInstitucion(nombre, domicilio, telefono, tipo_institucion/*, id_representante_legal*/) {
    return new Promise( (resolve, reject) => {
        if (!nombre) {
            console.error('[MensajeControlado] No hay institucion.')
            return reject('No existe institucion.')
        }
        // Se crea un objeto institucion
        const fullInstitucion = {
            nombre: nombre,
            domicilio: domicilio,
            telefono: telefono,
            tipo_institucion: tipo_institucion,
            fecha_creacion: new Date(),
            //representante_legal: id_representante_legal,
        }
        console.log( fullInstitucion )
        storage.add( fullInstitucion )
        return resolve( fullInstitucion )
    })
}

function updateInstitucion(id_institucion, nombre, domicilio, telefono, tipo_institucion) {
    return new Promise( async (resolve, reject) => {
        if (!id_institucion) {
            reject(  'No existe ID.' )
        }
        const fullInstitucion = {
            nombre: nombre,
            domicilio: domicilio,
            telefono: telefono,
            tipo_institucion: tipo_institucion,
            //representante_legal: id_representante_legal,
        }
        const result = await storage.update( id_institucion, fullInstitucion )
        resolve( result )
    } )
}

function getInstitucion( filtroInstitucion ) {
    return new Promise((resolve, reject) => {
        resolve( storage.list( filtroInstitucion ) )
    })
}

function deleteInstitucion(id_institucion) {
    return new Promise( (resolve, reject) => {
        if (!id_institucion) {
            reject('No existe institucion.')
        }
        storage.remove(id_institucion)
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    } )
}

module.exports = {
    addInstitucion,
    getInstitucion,
    updateInstitucion,
    deleteInstitucion,
}