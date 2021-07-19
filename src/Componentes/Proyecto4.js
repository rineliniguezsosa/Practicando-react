import React, { useState,useEffect } from 'react';
import Cargando from './Componentesp4/Cargando'
import Button from '@material-ui/core/Button'
import Tours from './Componentesp4/Tours'
import Box from '@material-ui/core/Box'

function Proyecto4() {

    function Eliminartours(id){
        let nuevostours = tours.filter(tour => tour.id !== id)
        setTours(nuevostours)
    }
    const Apitours = async () => {
        try{
        const url = await fetch("https://course-api.com/react-tours-project")
        const data = await url.json();
        setCarga(false)
        setTours(data)
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
        <Box style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Cargando></Cargando>
        </Box>
    )
    }
    if(tours.length === 0){
        return(
            <Box style={{textAlign:"center",margin:"auto"}}>
            <span>Nuestros Tours</span>
            <br></br><br></br>
            <Button onClick={Apitours} variant="contained" color="primary">
              Recargar
            </Button>
            </Box>
        )
    }
    return (
    <Box style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}>
        <Tours  tours={tours} Eliminartours={Eliminartours}></Tours>
    </Box>
    )
    
}

export default Proyecto4
