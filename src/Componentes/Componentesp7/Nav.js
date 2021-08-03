import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import withStyles from '@material/core/styles'
import { useStyles } from '../../Styleproyecto7/Style'

function Nav(props) {
    const {classes} = props
    return (
        <Box className={classes.nav} style={{width:"100%",height:"50px"}}>
            <Link to="/Home">Home</Link> <Link to="/Home">Home</Link>
        </Box>
    )
}

export default withStyles(useStyles)(Nav)
