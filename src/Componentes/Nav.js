import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'

const useStyles = () => ({
    root:{
      maxWidth:"100%",
      height:"50px",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#1976D2",
    },
    res:{
        display:"flex",
        flexWrap:"wrap",
    }
})

function Nav(props) {
    const {classes} = props
    return (
            <Grid className={classes.root} container >
                <ButtonGroup className={classes.res} size="small" variant="contained" color="primary">
                  <Button component={RouterLink} to="/" >Proyecto1</Button>
                  <Button component={RouterLink} to="/Proyecto2">Proyecto2</Button> 
                  <Button component={RouterLink} to="/Proyecto3">Proyecto3</Button>
                  <Button component={RouterLink} to="/Proyecto4">Proyecto4</Button>
                </ButtonGroup>
            </Grid>
        
    )
}

export default withStyles(useStyles)(Nav)
