const mongoose = require("mongoose");
const EsquemaProducto = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String
}, {timestamps: true, versionKey: false});
//timestamps creando campos createdAt y updatedAt eliminando atributo -v

const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;