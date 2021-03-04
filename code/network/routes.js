const express = require('express')
const { route } = require('../components/usuario/network')
const usuario = require('../components/usuario/network')
const carrera = require('../components/carrera/network')
const institucion = require('../components/institucion/network')
const representate_legal = require('../components/representate_legal/network')


const routes = function( server ) {
    server.use('/usuario', usuario)
    server.use('/carrera', carrera)
    server.use('/institucion', institucion)
    server.use('/representate_legal', representate_legal)
}

module.exports = routes