const Producto = require("../models/producto.model");

module.exports.create_product = (req, res)=>{
    Producto.create(req.body)
    .then(producto => res.json(producto))
    .catch(err => res.json({message: "hubo un error"}));
}

module.exports.get_all = (req, res) => {
    Producto.find()
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "hubo un error" + err}));
}

module.exports.get_product = (req, res) => {
    Producto.findOne({_id: req.params.id})
    .then(producto =>res.json(producto))
    .catch(err => res.json({message: "Error "+ err}))
}