const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json(), express.urlencoded({extended: true}));

//permite accesar desde un origen distinto
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

require("./server/config/mongoose.config");

const misRutas = require("./server/routes/producto.routes");
misRutas(app);

app.listen(8000, () => console.log("server liste"));