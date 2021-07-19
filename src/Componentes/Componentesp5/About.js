import React from 'react'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from '../../Styleproyecto5/Style'

function About(props) {
    const {classes} = props
    return (
        <Box className={classes.about}>
           <Box><span style={{color:"#000",fontWeight:700}}>About</span></Box>
           <br></br>
           <Box style={{width:"50%"}}>
           <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
           </Box>

        </Box>
    )
}

export default withStyles(useStyles)(About)
