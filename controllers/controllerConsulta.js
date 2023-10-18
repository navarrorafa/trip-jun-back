const Consultas = require("../models/ConsultaModel");
const Consultita = require("../models/ConsultaCortaModel");
//RECOGER TODAS LAS NOTICIAS

const obtenerConsultas = async (req, res) => {

    const uid=await req.params.uid;
    
    try {
        const existe = await Consultas.find({uid:uid});
    
        if (existe) {
            return res.status(200).json({
                ok:true,
                data:existe
            })
        }else {
            return res.status(400).json({
                msg: "no hay consultas con ese usuario"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:"contacta con los admin"
        })
    }
}

//CONSULTAS CORTAS
const obtenerConsultasCortas = async (req, res) => {

    const usuario=await req.params.usuario;
    
    try {
        const existe = await Consultita.find({usuario:usuario});
    
        if (existe) {
            return res.status(200).json({
                ok:true,
                data:existe
            })
        }else {
            return res.status(400).json({
                msg: "no hay consultas con ese usuario"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:"contacta con los admin"
        })
    }
}

//CREAR CONSULTA

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
//CREAR CONSULTA CORTA

const crearConsultaCorta = async (req, res) => {
    const consultita = new Consultita(req.body);

    try {
        
        const consultaGuardada = await consultita.save()
        return res.status(201).json({
            ok: true,
            consultita: consultaGuardada,
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

const borrarConsulta = async (req, res) => {

    const id = await req.params.id;
    try {
        const existe = await Consultas.findByIdAndDelete(id);

        if (existe) {
            return res.status(200).json({

                ok: true,
                data: existe,
                msg: "consulta eliminada"
            })
        } else {
            return res.status(400).json({
                msg: "La consulta que buscas no existe"

            });

        };

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "contacta con los admin"
        });

    };


    
}

const borrarConsultaCorta = async (req, res) => {

    const id = await req.params.id;
    try {
        const existe = await Consultita.findByIdAndDelete(id);

        if (existe) {
            return res.status(200).json({

                ok: true,
                data: existe,
                msg: "consulta eliminada"
            })
        } else {
            return res.status(400).json({
                msg: "La consulta que buscas no existe"

            });

        };

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "contacta con los admin"
        });

    };


    
}

module.exports = {
    obtenerConsultas,
    crearConsulta,
    obtenerConsultasCortas,
    crearConsultaCorta,
    borrarConsulta,
    borrarConsultaCorta
};