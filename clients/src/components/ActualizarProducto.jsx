import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const ActualizarProducto = () =>{

    const history = useHistory();
    const {id} = useParams();
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    useEffect( () => {
        
        axios.get("http://localhost:8000/api/productos/"+id)
        .then(res => {
            console.log(res.data);
            setNombre(res.data.nombre);
            setPrecio(res.data.precio);
            setDescripcion(res.data.descripcion);
        })
        .catch(err => console.log("Error: " + err));
}, []);

const actualizarProducto = e => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/productos/"+id, {
        nombre,
        precio,
        descripcion
    })
    .then(res => history.push("/"))
    .catch(err => console.log("Error: " + err))
}

    return (
        <div>
            <form onSubmit={actualizarProducto}>
                <div className="form-group">
                    <label htmlFor="nombre">Actualizar Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="precio">Actualizar Precio:</label>
                    <input id="precio" name="precio" type="number" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="descripcion">Actualizar Descripcion:</label>
                    <input id="descripcion" name="descripcion" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </div>
                <input type="submit" className="btn btn-success" value="Guardar" />
            </form>
        </div>
    )
}
export default ActualizarProducto;