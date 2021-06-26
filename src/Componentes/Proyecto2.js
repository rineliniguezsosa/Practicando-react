import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea';
import { ThemeProvider,createMuiTheme,withStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { Input } from '@material-ui/core';


const useStyles = () => ({
    header:{
        fontWeight:"700",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        fontSize:"16px",
    },
    input:{
        display:"flex",
        alignItems:"center",
    },
    paises:{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row",
    },
    format:{
        display:"flex",
        flexDirection:"column",
    },
    
});

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Nunito Sans',
        'sans-serif',
      ].join(','),
    },
});

class Proyecto2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            paises:[]
        }
    }
    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response =>{
            this.setState({ paises: response.data });
        })
        .catch(error=>{
            console.log("Algo ha salido mal api countries",error)
        })
    }
    Cambio = ()=>{
        console.log("mientras")
    }
    render() { 
        const { classes } = this.props
        const { paises } = this.state
        return (
          <ThemeProvider theme={theme}>
            <Paper ref={this.header} elevation={2} className={classes.header} style={{maxWidth:"100%",height:"50px"}}>
                <span style={{marginLeft:"40px"}}>Donde en el mundo?</span> 
                <Button onClick={this.Cambio} style={{marginRight:"40px"}} size="small" variant="contained" color="default">
                  Dark Mode
                </Button>
            </Paper>
            <Box ref={this.form}  className={classes.input} style={{width:"100%",height:"70px"}}>
                    <form>
                        <Paper elevation={2} style={{marginLeft:"40px",width:"350px"}}>
                            <Input style={{width:"100%",height:"50px"}}
                              
                            />
                        </Paper>
                    </form>
            </Box>
            <Box ref={this.body} className={classes.paises} style={{width:"100%",padding:"40px"}}>
                {
                paises.map(datos=>(
                    <Card  style={{width:"200px",height:"200px",marginLeft:"5px",marginRight:"5px",marginBottom:"10px",marginTop:"10px"}}>
                        <CardActionArea style={{width:"100%",height:"100px"}}>
                            <img style={{width:"100%",height:"100px"}} alt="banderas" src={datos.flag}>
                            </img>
                        </CardActionArea>
                        <CardContent className={classes.format} style={{width:"100%"}}>
                            <span style={{fontWeight:"600",fontSize:"12px"}}>{datos.name}</span>
                            <span style={{fontWeight:"600",fontSize:"12px"}}>{datos.capital}</span>
                            <span style={{fontWeight:"600",fontSize:"12px"}}>{datos.region}</span>
                            <span style={{fontWeight:"600",fontSize:"12px"}}>{datos.population}</span>
                        </CardContent>
                    </Card>
                ))
                }
            </Box>
          </ThemeProvider>
        
                   
         );
    }
}
 
export default  withStyles(useStyles)(Proyecto2);