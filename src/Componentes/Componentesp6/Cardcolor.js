import React,{useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import rgbToHex from './utils'

function Cardcolor({rgb,weight,index,hexColor}) {
    const [alerta, setAlerta] = useState(false)
    let codigo = rgb.join(",")
    let hex = rgbToHex(...rgb)
    let hexvalor = `#${hexColor}`

    useEffect(() => {
     const mensaje =  setTimeout(() => {
          setAlerta(false)
     }, 1000);
     return ()=> clearInterval(mensaje)
    },[alerta])
    
    const Copiar = () => {
        setAlerta(true)
        navigator.clipboard.writeText(hexvalor)
    }
    return (
           <Paper onClick={Copiar} elevation={3} style={{width:"10%",height:"100px",backgroundColor:`rgb(${rgb})`,margin:"5px",padding:"10px"}}>
           <span style={{color:`${index > 10 && "#fff"}`}}>{weight}%</span>
           <p style={{color:`${index > 10 && "#fff"}`}}>{hexvalor}</p>
           {alerta && <p style={{color:`${index > 10 && "#fff"}`}}>Copiado</p>}
           </Paper>
    )
}

export default Cardcolor
