import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from '../../Styleproyecto7/Style'
import Box from '@material-ui/core/Box'

function Nav(props) {
    const {classes} = props; 
    return (
        <Box className={classes.dot}>
            
        </Box>
    )
}

export default withStyles(useStyles)(Nav)
