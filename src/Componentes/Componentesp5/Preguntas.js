import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Preguntas({question,respuesta}) {
    const [show, setShow] = useState(false)
    return (
        <Box boxShadow="5" style={{width:"100%",padding:"10px",marginBottom:"10px"}}>
            <Box style={{display:"flex",justifyContent:"space-between"}}>
                <span>{question}</span>
                <Avatar onClick={()=> setShow(!show)} style={{width:"20px",height:"20px",backgroundColor:"#DD5246"}}>

                    {show ? <RemoveIcon></RemoveIcon> : <AddIcon ></AddIcon> }

                </Avatar>
            </Box>
            {show && <span>{respuesta}</span>}
        </Box>
    )
}

export default Preguntas
