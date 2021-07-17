import React, { Component } from 'react';
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from '../Styleproyecto3/Style.js'
import Cards from './Componentesp3/Cards'

class Proyecto3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
        } 
    }
    render() { 
        const { classes } = this.props
        return (
          <Box className={classes.rinel}>
              <Cards>
              </Cards>
          </Box>        
         );
    }
}
 
export default  withStyles(useStyles)(Proyecto3);