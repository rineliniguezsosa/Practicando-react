import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { ThemeProvider,createMuiTheme,withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
    },
});

const useStyles = () =>({
    redes:{
        display:"flex",
        flexDirection:"column", 
    },
    scmedia:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    
})

function Bigsquare(props) {
    const { classes,colores,logos,colortext } = props
    return (
        <ThemeProvider theme={theme}>
            <Paper  
            className={classes.redes} 
            style={{height:"auto",width:"280px"}} elevation={3}
            >
            <Box style={{backgroundColor:colores,width:"100%",height:"5px",borderRadius:"5px"}}></Box>
            <Box className={classes.scmedia} style={{width:"100%",height:"50px",border:"1px red solid"}}>
               <img style={{color:colores}} alt="" src={logos}></img> 
               <span style={{fontWeight:700,color:colortext,fontSize:"14px"}}>@Rinel</span>
            </Box>
            </Paper>
        </ThemeProvider>
    )
}

export default withStyles(useStyles)(Bigsquare)
