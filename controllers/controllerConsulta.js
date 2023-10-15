const Consultas = require("../models/ConsultaModel");

//RECOGER TODAS LAS NOTICIAS

const obtenerConsultas = async (req, res) => {

    try {
        const consultas = await Consultas.find();
        return res.status(200).json({
            ok: true,
            msg: "lista de noticias",
            data: noticias

        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "error, contacta con el admin"

        });

    };
}

//CREAR NOTICIA

const crearConsulta = async (req, res) => {
    const consulta = new Consultas(req.body);

    try {
        
        const consultaGuardada = await consulta.save()
        return res.status(201).json({
            ok: true,
            consulta: consultaGuardada,
            msg: "Consulta agregada"

        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "error, contacta con el admin"

        });

    };
}

module.exports = {
    obtenerConsultas,
    crearConsulta
};