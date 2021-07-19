import React from 'react';
import Tour from './Tour'
import Box from '@material-ui/core/Box'


function Tours({tours,Eliminartours}) {
    return (
        <Box style={{textAlign:"center"}}>
          <span>Nuestros Tours</span>
          <br></br>
           {tours.map((item)=>{
                return <Tour key={item.id} {...item} Eliminartours={Eliminartours}></Tour> 
           })}
        </Box>
    )
}

export default Tours

