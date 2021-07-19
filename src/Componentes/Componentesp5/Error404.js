import React from 'react'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from '../../Styleproyecto5/Style'
import { Link } from 'react-router-dom'

function Error404(props) {
    const {classes} = props
    return (
        <Box className={classes.about}>
            <span>Error 404</span>
            <Link to="/">REGRESAR</Link>
        </Box>
    )
}

export default withStyles(useStyles)(Error404)
