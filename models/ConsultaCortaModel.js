const { Schema, model } = require("mongoose");
const cortaSchema = new Schema({
    estancia: {
        type: String,
        require: true,

    },
    room_type_encoded: {
        type: String,
        require: true,

    },
    distrito: {
        type: String,
        require: true,

    },
    neighbourhood_encoded: {
        type: String,
        require: true,

    },
    accommodates: {
        type: Number,
        require: true,

    },
    bedrooms: {
        type: Number,
        require: true,

    },
    beds: {
        type: Number,
        require: true,

    },
    Grouped_reviews: {
        type: Number,
        require: true,

    },
    fecha: {
        type: String,
        default: new Date().toDateString()
    },
    uid: {
        type: String,
        require: true

    },
    precio_maximo_estancia: {
        type: Number,
        require: true

    },
    precio_maximo_por_dia: {
        type: Number,
        require: true

    },
    precio_minimo_estancia: {
        type: Number,
        require: true

    },
    precio_minimo_por_dia: {
        type: Number,
        require: true

    }
    




})

module.exports = model("Consultita", cortaSchema)