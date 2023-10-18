const express = require("express")
const router = express.Router()
const {obtenerConsultas, crearConsulta, obtenerConsultasCortas, crearConsultaCorta, borrarConsulta, borrarConsultaCorta} = require("../controllers/controllerConsulta")
//RECOGER CONSULTA POR ID USUARIO
router.get('/:uid', obtenerConsultas)

//RECOGER CONSULTA CORTA POR ID USUARIO
router.get('/corta/:uid', obtenerConsultasCortas)

//CREAR CONSULTA
router.post("/crear", crearConsulta)
//CREAR CONSULTA CORTA
router.post("/crearcorta", crearConsultaCorta)

//BORRAR CONSULTA//
router.delete("/borrar/:id", borrarConsulta)
//BORRAR CONSULTA//
router.delete("/borrarcorta/:id", borrarConsultaCorta)


module.exports = router