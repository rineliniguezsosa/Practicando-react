import React from 'react';
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'

function Cards({data}) {
    return ( 
        <Box>
            {
                data.map(item=>(
                <Box key={item.id} style={{width:"100%",height:"50px",display:"flex",flexDirection:"row",marginTop:"10px"}}>
                    <Box>
                        <Avatar src={item.imagen} style={{width:"50px",height:"50px"}}></Avatar>
                    </Box>
                    <Box style={{marginLeft:"10px"}}>
                        <span style={{color:"#0076B8",fontFamily:"sans-serif"}}>{item.nombre}</span>
                        <br></br>
                        <span style={{color:"#000",fontFamily:"sans-serif"}}>{item.edad}</span>
                    </Box>
                </Box>
                ))
            }
        </Box>
    )
}

export default Cards
