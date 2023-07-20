import { useState } from "react"
import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";

const FormularioProyecto = () => {

    const [ nombre, setNombre ] = useState("");
    const [ descripcion, setDescripcion ] = useState("");
    const [ fechaEntrega, setFechaEntrega ] = useState("");
    const [ cliente, setCliente ] = useState("");
 
    const { mostrarAlerta, alerta, submitProyecto } = useProyectos();

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, descripcion, fechaEntrega, cliente].includes("")){
            mostrarAlerta({
                msg: "Todos los Campos son Obligatorios",
                error: true
            })
            return;
        }

        // Pasar los datos hacia el provider
        await submitProyecto({ nombre, descripcion, fechaEntrega, cliente});

        setNombre("");
        setDescripcion("");
        setCliente("");
        setFechaEntrega("");
    }

    const { msg } = alerta;

    return (
        <form 
            className="bg-white py-10 px-5 md:w-full lg:w-1/2 rounded-lg shadow"
            onSubmit={handleSubmit}
        >

            {msg && <Alerta alerta={alerta}/> }

            <div className="mb-5">
                <label
                    className="text-gray-700 uppercase font-bold text-sm"
                    htmlFor="nombre"
                >
                    Nombre Proyecto    
                </label>

                <input
                    id="nombre"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Nombre del Proyecto"
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                >
                
                </input>
            </div>

            <div className="mb-5">
                <label
                    className="text-gray-700 uppercase font-bold text-sm"
                    htmlFor="descripcion"
                >
                    Descripción
                </label>

                <textarea
                    id="descripcion"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Descripción del Proyecto"
                    value={descripcion}
                    onChange={ e => setDescripcion(e.target.value)}
                >
                
                </textarea>

            </div>

            <div className="mb-5">
                <label
                    className="text-gray-700 uppercase font-bold text-sm"
                    htmlFor="fechaEntrega"
                >
                    Fecha de Entrega    
                </label>

                <input
                    id="fechaEntrega"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fechaEntrega}
                    onChange={ e => setFechaEntrega(e.target.value)}
                >
                
                </input>
            </div>

            <div className="mb-5">
                <label
                    className="text-gray-700 uppercase font-bold text-sm"
                    htmlFor="cliente"
                >
                    Nombre del Cliente 
                </label>

                <input
                    id="cliente"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Nombre del Cliente"
                    value={cliente}
                    onChange={ e => setCliente(e.target.value)}
                >
                
                </input>
            </div>

            <input 
                type="submit"
                value="Crear Proyecto"
                className="bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors"
            />
        </form>
    )
}

export default FormularioProyecto