import React, { Component } from 'react';
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from '../Styleproyecto6/Style'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Values from 'values.js'

class Proyecto6 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:"",
            error:false,
            lista:[],
         }
    }
    Send = (e) => {
        e.preventDefault();
        let colores = new Values(this.state.color).all(10);
        console.log(colores)
    }
    render() { 
        const {classes} = this.props
        return ( 
            <Box className={classes.main} style={{width:"100%",height:"560px"}}>
                <Box className={classes.boxform} >
                    <span className={classes.texto}>Generador de colores</span>
                    <form onSubmit={this.Send}>
                        <TextField size="small" onChange={(e)=> this.setState({ color: e.target.value })} label="#FFFFFF" variant="outlined"></TextField>
                        <Button type="submit" style={{height:"40px"}} value={this.state.color} variant="contained" color="primary">
                          agregar
                        </Button>
                    </form>
                </Box>
            </Box>
         );
    }
}
 
export default withStyles(useStyles)(Proyecto6);