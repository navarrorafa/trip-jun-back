const express = require("express")
const router = express.Router()
const {obtenerConsultas, crearConsulta} = require("../controllers/controllerConsulta")
//RECOGER TODAS LAS CONSULTAS
router.get('/', obtenerConsultas)



//CREAR NOTICIA
router.post("/", crearConsulta)



module.exports = router