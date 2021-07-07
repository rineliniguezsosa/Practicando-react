import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function Titulo() {
    return (
        <Grid container style={{width:"100%",height:"60px",border:"1px red solid",textAlign:"center"}}>
            <Typography variant="h3" color="initial">Tic Tac Toe</Typography>
        </Grid>
    )
}

export default Titulo
