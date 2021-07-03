import React from 'react'
import Box from '@material-ui/core/Box'
import Bigsquare from './Componentesp2/Bigsquare'
import { ThemeProvider,createMuiTheme,withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import facebook from '../Imagenes/icon-facebook.svg'
import arrowup from '../Imagenes/icon-up.svg'
import twitter from '../Imagenes/icon-twitter.svg'
import arrowdown from '../Imagenes/icon-down.svg'
import youtube from '../Imagenes/icon-youtube.svg'
import instagram from '../Imagenes/icon-instagram.svg'

const useStyles = () => ({
    principal:{
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        transition:"all 0.3s linear",
    },
    container1:{
       position:"relative",
       margin:"auto",
       width:"100%",
       height:"250px",
    },
    box1:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginTop:"20px",
      margin:"auto",
    },
    media:{
      position:"absolute",
      display:"flex",
      flexDirection:"row",
      top:"60%",
    },
    
   
});

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
    },
});

class Proyecto2 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
          checkedA:true,
          color:"hsl(230, 17%, 14%)",
          colorc1:"hsl(228, 28%, 20%)",
          colortext:"hsl(228, 34%, 66%)",
          colornumero:"hsl(0, 0%, 100%)",
          title:'hsl(0, 0%, 100%)',
          
        }
       
       
    }
    handlechange = (e)=>{
        this.setState({checkedA:e.target.checked}) 
        if(e.target.checked){ 
        this.setState({color:'hsl(230, 17%, 14%)'})
        this.setState({colornumero:'hsl(0, 0%, 100%)'})
        this.setState({colorc1:'hsl(228, 28%, 20%)'})
        this.setState({colortext:'hsl(228, 34%, 66%)'})
        this.setState({title:'hsl(0, 0%, 100%)'})
        }
        else{
        this.setState({ color:'hsl(0, 0%, 100%)' })
        this.setState({ colorc1:'hsl(225, 100%, 98%)'})
        this.setState({colortext:'hsl(228, 12%, 44%)'})
        this.setState({colornumero:'hsl(228, 28%, 20%)'})
        this.setState({title:'hsl(228, 28%, 20%)'})
       }
    }
    
    render() { 
        const { classes } = this.props
        const { color,colorc1,colortext,colornumero,title } = this.state
        return (
          <ThemeProvider theme={theme}>  
            <Box style={{backgroundColor:color}} className={classes.principal}>
                <Box className={classes.container1} style={{backgroundColor:colorc1}}>
                  <Box className={classes.box1} 
                  style={{width:"1200px",height:"50px"}}>

                  <Box>
                    <span style={{fontWeight:700,color:title,fontSize:"20px"}}>
                      Social Media Dashboard
                    </span>
                  </Box>
                  
                  <Box>
                  <span style={{fontWeight:700,color:"hsl(228, 12%, 44%)"}}>Dark Mode</span>
                  <Switch
                  checked={this.state.checkedA}
                  name="switchvalue"
                  size="small"
                  color="primary"
                  onChange={this.handlechange}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  >
                  </Switch>
                  </Box>

                  <Box className={classes.media} 
                  style={{width:"1200px",height:"250px"}}>
                    
                    <Bigsquare  
                    colorcard={color}
                    numero="1987" 
                    colornumero={colornumero}
                    logos={facebook} 
                    colortext={colortext} 
                    colores="hsl(210, 78%, 56%)" 
                    arrow={arrowup}
                    colorarrow="hsl(163, 72%, 41%)"
                    followers="12 Today"
                    ></Bigsquare>

                    <Bigsquare  
                    colorcard={color}
                    numero="1044" 
                    colornumero={colornumero}
                    logos={twitter} 
                    colortext={colortext} 
                    colores="hsl(210, 78%, 56%)" 
                    arrow={arrowup}
                    colorarrow="hsl(163, 72%, 41%)"
                    followers="99 Today"
                    ></Bigsquare>

                    <Bigsquare  
                    colorcard={color}
                    numero="11K" 
                    colornumero={colornumero}
                    logos={instagram} 
                    colortext={colortext} 
                    colores="hsl(37, 97%, 70%)" 
                    arrow={arrowup}
                    colorarrow="hsl(163, 72%, 41%)"
                    followers="1099 Today"
                    ></Bigsquare>

                    <Bigsquare  
                    colorcard={color}
                    numero="8239" 
                    colornumero={colornumero}
                    logos={youtube} 
                    colortext={colortext}  
                    colores="hsl(348, 97%, 39%)" 
                    arrow={arrowdown}
                    colorarrow="hsl(348, 97%, 39%)"
                    followers="144 Today"
                    ></Bigsquare>
                    
                  </Box>
                  
                  </Box>
                </Box>
                <Box style={{width:"100%",height:"500px"}}>

                </Box>
            </Box>
          </ThemeProvider>        
         );
    }
}
 
export default  withStyles(useStyles)(Proyecto2);