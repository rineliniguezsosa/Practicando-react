import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Navegacion from './Componentesp5/Navegacion'
import Home from './Componentesp5/Home'
import About from './Componentesp5/About'
import Cocktail from './Componentesp5/Cocktail'
import Box from '@material-ui/core/Box'
import Error404 from './Componentesp5/Error404'
import { useStyles } from '../Styleproyecto5/Style'



class Proyecto5 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        //const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    }
    render() { 
        const {classes} = this.props
        return ( 
            <Box className={classes.dot}>
               <Router>
                    <Navegacion></Navegacion>
                    
                    <Switch>
                    <Route exact path="/"  component={Home}></Route>
                    <Route exact path="/About" component={About}></Route>
                    <Route exact path="/Cocktail:id" component={Cocktail}></Route>
                    <Route exact path="*" component={Error404} ></Route>
                    </Switch>
                    
               </Router>
            </Box>
         );
    }
}
 
export default withStyles(useStyles)(Proyecto5);