import React, { useState } from 'react';
import Preguntas from './Preguntas'
import Box from '@material-ui/core/Box'
import Datos from './Datos'

function Box2() {
    const [data] = useState(Datos)
    return (
        <Box style={{width:"60%",display:"flex",flexDirection:"column"}} >
            {
                data.map((item)=>{
                    return <Preguntas key={item.id} {...item}></Preguntas>
                })
            }
        </Box>
    )
}

export default Box2
