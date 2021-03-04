const Model = require('./model')

function addInstitucion( nombre ) {
    const objeto = new Model( nombre )
    objeto.save()
}

function getInstitucion( filtroInstitucion ) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtroInstitucion != null) {
            filtro = { nombre: filtroInstitucion }
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

async function updateInstitucion(id_institucion, nombre) {
    const foundInstitucion = await Model.findOne({ _id: id_institucion })

    if (foundInstitucion) {
        foundInstitucion.nombre = nombre.nombre
        foundInstitucion.domicilio = nombre.domicilio
        foundInstitucion.telefono = nombre.telefono
        foundInstitucion.tipo_institucion = nombre.tipo_institucion
        
        const newInstitucion = await foundInstitucion.save()
        return newInstitucion
    }
}

function deleteInstitucion(id_institucion) {
    return Model.deleteOne({ _id: id_institucion })
}

module.exports = {
    add: addInstitucion,
    list: getInstitucion,
    update: updateInstitucion,
    remove: deleteInstitucion,
}