import React, {useState} from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

const NuevoProducto = () => {
    const[nombre, setNombre] = useState("");
    const[precio, setPrecio] = useState("");
    const[descripcion, setDescripcion] = useState("");
    const history = useHistory();

    const guardarProducto = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/productos",{
            nombre,
            precio,
            descripcion
        })
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
            });
    }



    return(
        <div>
            <h1>Nuevo Producto</h1>
            <form onSubmit={guardarProducto} >
                <div className="form-group">
                    <label htmlFor="nombre">Ingrese Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="precio">Ingrese Precio:</label>
                    <input id="precio" name="precio" type="number" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="descripcion">Ingrese Descripcion:</label>
                    <input id="descripcion" name="descripcion" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </div>
                <input type="submit" className="btn btn-success" value="Guardar" />
            </form>       
        </div>
    )

}
export default NuevoProducto;