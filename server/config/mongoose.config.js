const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/adminproductos",{
useNewUrlParser: true,
useUnifiedTopology: true


})
.then(()=>console.log("connect db"))
.catch(err => console.log("Error conexion DV" + err));