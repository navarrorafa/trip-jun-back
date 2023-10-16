const express = require("express")
const router = express.Router()
const {obtenerConsultas, crearConsulta} = require("../controllers/controllerConsulta")
//RECOGER CONSULTA POR ID USUARIO
router.get('/:usuario', obtenerConsultas)



//CREAR CONSULTA
router.post("/crear", crearConsulta)



module.exports = router