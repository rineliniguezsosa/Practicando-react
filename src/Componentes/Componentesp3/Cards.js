import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import datos from './Datos'

function Cards() {
    const [data, setData] = useState(datos)
    return (
        <Box boxShadow="1" style={{backgroundColor:"#fff",width:"330px",height:"420px",borderRadius:"5px",padding:"20px",display:"flex",flexDirection:"column"}}
        >
            <span style={{color:"#000",fontFamily:"sans-serif"}}>5 cumpleaños hoy</span>
            {
                data.map(items => (
                <Box key={items.id}  style={{width:"100%",height:"50px",display:"flex",flexDirection:"row"}}>
                    <Box>
                        <Avatar style={{width:"50px",height:"50px"}} 
                        src={items.imagen} >   
                        </Avatar>
                    </Box>
                    <Box style={{marginLeft:"10px"}}>
                    <span style={{color:"#0076B8",fontFamily:"sans-serif"}}>rinel</span>
                    <br></br>
                    <span style={{color:"#000",fontFamily:"sans-serif"}}>22</span>
                    </Box>
                </Box>
                ))
            }
            <Button variant="contained" color="primary">
              Elimina todo
            </Button>
        </Box>
        
    )
}

export default Cards
