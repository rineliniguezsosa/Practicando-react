import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from '../../Styleproyecto5/Style'
import Box from '@material-ui/core/Box'

function Navegacion(props) {
    const {classes} = props
    return (
        <Box boxShadow="3" className={classes.navegacion} >
            <Box style={{marginRight:"300px"}}>
                <span style={{ fontFamily:"sans-serif",}}>ElCockTail</span>
            </Box>
            <Box>
                <Link to="/" className={classes.texto}>Home</Link>
                <Link to="/About" style={{marginLeft:"20px"}} className={classes.texto}>About</Link>
            </Box>
        </Box>
    )
}

export default withStyles(useStyles)(Navegacion)
