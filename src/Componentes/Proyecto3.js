import React, { Component } from 'react';
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from '../Styleproyecto3/Style.js'
import Button from '@material-ui/core/Button'
import Cards from './Componentesp3/Cards'
import datos from './Componentesp3/Datos'

class Proyecto3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         data:datos
        } 
    }
    Deleteall = () => {
        this.setState({ data: [] });
    }
    render() { 
        const { classes } = this.props
        const {data} = this.state
        return (
          <Box className={classes.main}>
              <Box boxShadow="1" className={classes.square}>
                  <span style={{color:"#000",fontFamily:"sans-serif"}}>{data.length} cumpleaños hoy</span>
                  <Cards data={data} ></Cards>
                  <Button onClick={this.Deleteall} style={{marginTop:"5px"}} variant="contained" color="primary">
                    Elimina todo
                  </Button>
              </Box>
          </Box>        
         );
    }
}
 
export default  withStyles(useStyles)(Proyecto3);