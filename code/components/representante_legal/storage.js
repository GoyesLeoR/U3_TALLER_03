const Model = require('./model')

function addRepresentante_legal( cedula ) {
    const objeto = new Model( cedula )
    objeto.save()
}

function getRepresentante_legal( filtroRepresentante_legal ) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtroRepresentante_legal != null) {
            filtro = { cedula: filtroRepresentante_legal }
        }
        Model.find( filtro )
            .populate( 'representante_legal' )
            .exec( (error, populated) => {
                if (error) {
                    reject( error )
                    return false
                }
                resolve( populated )
            } )
    })
}

async function updateRepresentante_legal(id_representante_legal, cedula) {
    const foundRepresentante_legal = await Model.findOne({ _id: id_representante_legal })

    if (foundRepresentante_legal) {
        foundRepresentante_legal.cedula = cedula.cedula
        foundRepresentante_legal.nombre = cedula.nombre
        foundRepresentante_legal.apellido = cedula.apellido
        foundRepresentante_legal.telefono = cedula.telefono
        foundRepresentante_legal.correo_electronico = cedula.correo_electronico
        
        const newRepresentante_legal = await foundRepresentante_legal.save()
        return newRepresentante_legal
    }
}

function deleteRepresentante_legal(id_representante_legal) {
    return Model.deleteOne({ _id: id_representante_legal })
}

module.exports = {
    add: addRepresentante_legal,
    list: getRepresentante_legal,
    update: updateRepresentante_legal,
    remove: deleteRepresentante_legal,
}