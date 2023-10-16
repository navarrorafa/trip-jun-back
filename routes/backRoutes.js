const express = require("express")
const router = express.Router()
const {obtenerConsultas, crearConsulta, obtenerConsultasCortas, crearConsultaCorta} = require("../controllers/controllerConsulta")
//RECOGER CONSULTA POR ID USUARIO
router.get('/:usuario', obtenerConsultas)

//RECOGER CONSULTA CORTA POR ID USUARIO
router.get('/corta/:usuario', obtenerConsultasCortas)

//CREAR CONSULTA
router.post("/crear", crearConsulta)
//CREAR CONSULTA CORTA
router.post("/crearcorta", crearConsultaCorta)




module.exports = router