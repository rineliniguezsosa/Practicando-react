import React from 'react'
import Box from '@material-ui/core/Box'
import Box1 from './Componentesp5/Box1'
import Box2 from './Componentesp5/Box2'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from '../Styleproyecto5/Style'


function Proyecto5(props){
    const {classes} = props
    return(
        <Box className={classes.position}>
            <Paper className={classes.boxes}>
            
                <Box1></Box1>
                <Box2></Box2>
            
            </Paper>
        </Box>
    )
}

export default withStyles(useStyles)(Proyecto5)