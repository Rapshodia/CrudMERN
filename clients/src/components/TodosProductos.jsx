import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";

const TodosProductos = () => {

    const [productos, setProductos] = useState([]);

    useEffect( () =>{
        axios.get("http://localhost:8000/api/productos")
            .then(res => {
                setProductos(res.data);
            })
            .catch(err => ("Erro " + err) )
    }, [])

    return(
        <div>
        <h1>Todos los productos</h1>
        <Link className="btn btn-success" to="/nuevo">Nuevo producto</Link>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((producto, index) => (
                        <tr key={index}>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.descripcion}</td>
                            <td>
                                <Link className="btn btn-primary" to={`/producto/${producto._id}`}>Detalle</Link>

                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    </div>
    )
}
export default TodosProductos;