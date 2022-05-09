import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Producto = () => {
    const {id} = useParams();
    const [producto, setproducto] = useState({});

    useEffect(() => {

        axios.get("http://localhost:8000/api/productos/"+id)
            .then(res => {
                console.log(res.data);
                setproducto(res.data);
            })
            .catch(err => console.log("Error: " + err));
    }, [])

    return(
        <div className="card">
            <h1>{producto.nombre}</h1>
            <h2>${producto.precio}</h2>
            <p>
                {producto.descripcion}
            </p>
            <Link to="/" className="btn btn-primary">Regresar a Home</Link>
        </div>
    )

}
export default Producto;