const { Schema, model } = require("mongoose");
const cortaSchema = new Schema({
    estancia: {
        type: String,
        require: true,

    },
    tipo: {
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
    hab: {
        type: Number,
        require: true,

    },
    banos: {
        type: Number,
        require: true,

    },
    area: {
        type: Number,
        require: true,

    },
    furnished: {
        type: Number,
        require: true,

    },
    fecha: {
        type: Date,
        default: Date.now
    },
    uid: {
        type: String,
        require: true

    },
    prediction: {
        type: Number,
        require: true

    }
    




})

module.exports = model("Consultita", cortaSchema)