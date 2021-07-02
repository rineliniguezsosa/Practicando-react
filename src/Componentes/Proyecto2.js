import React from 'react'
import Box from '@material-ui/core/Box'
import Bigsquare from './Componentesp2/Bigsquare'
import { ThemeProvider,createMuiTheme,withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const useStyles = () => ({
    principal:{
        width:"100%",
        height:"auto",
        border:"1px red solid",
        display:"flex",
        flexDirection:"column",
        transition:"all 0.3s ease",
    },
    container1:{
       backgroundColor:"hsl(228, 28%, 20%)",
       position:"relative",
       margin:"auto",
        
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
      top:"50%",
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
        }
       
       
    }
    handlechange = (e)=>{
        this.setState({checkedA:e.target.checked}) 
        e.target.checked ? this.setState({color:'hsl(230, 17%, 14%)'}) : 
        this.setState({ color: 'hsl(0, 0%, 100%)' });
    }
    
    render() { 
        const { classes } = this.props
        console.log(this.state.checkedA)
        return (
          <ThemeProvider theme={theme}>  
            <Box style={{backgroundColor:this.state.color}} className={classes.principal}>
                <Box className={classes.container1} style={{width:"100%",height:"280px"}}>
                  <Box className={classes.box1} 
                  style={{width:"1200px",height:"50px"}}>

                  <Box>
                    <span style={{fontWeight:700,color:"#fff",fontSize:"20px"}}>
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
                    <Bigsquare></Bigsquare>
                  </Box>
                  
                  </Box>
                </Box>
                <Box style={{width:"100%",height:"500px",border:"1px blue solid"}}>

                </Box>
            </Box>
          </ThemeProvider>        
         );
    }
}
 
export default  withStyles(useStyles)(Proyecto2);