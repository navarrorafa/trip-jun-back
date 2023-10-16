const { Schema, model } = require("mongoose");
const consultaSchema = new Schema({
    estancia: {
        type: String,
        require: true,

    },

    distrito: {
        type: String,
        require: true,

    },
    barrio: {
        type: String,
        require: true,

    },
    habitaciones: {
        type: Number,
        require: true,

    },
    banyos: {
        type: Number,
        require: true,

    },
    metros: {
        type: Number,
        require: true,

    },
    fecha: {
        type: Date,
        default: Date.now
    },
    usuario: {
        type: String,
        require: true

    },
    prediccion: {
        type: Number,
        require: true

    }
    




})

module.exports = model("Consultas", consultaSchema)