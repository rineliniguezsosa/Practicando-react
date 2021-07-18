import React, { useState,useEffect } from 'react';
import Cargando from './Componentesp4/Cargando'
import Tours from './Componentesp4/Tours'



function Proyecto4() {

    const Apitours = async () => {
        try{
        const url = await fetch("https://course-api.com/react-tours-project")
        const data = await url.json();
        setCarga(false)
        setTours(data)
        console.log(data);
        }
        catch{
            console.log("Algo salio mal");
            setCarga(false)
        }
    }
    useEffect(() => {
        Apitours();
    },[]);
    

    const [carga, setCarga] = useState(true)
    const [tours, setTours] = useState([])
    if(carga){
    return (
        <div><Cargando></Cargando></div>
    )
    }
    return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}>
        <Tours  tours={tours}></Tours>
    </div>
    )
    
}

export default Proyecto4
