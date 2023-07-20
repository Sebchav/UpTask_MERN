import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ProyectosContext = createContext();

// eslint-disable-next-line react/prop-types
const ProyectosProvider = ({children})=>{

    const [proyectos, setProyectos] = useState([]);

    return (
        <ProyectosContext.Provider
            value={{
                proyectos
            }}
        >
            {children}
        </ProyectosContext.Provider>
    )
}

export {
    ProyectosProvider
}

export default ProyectosContext