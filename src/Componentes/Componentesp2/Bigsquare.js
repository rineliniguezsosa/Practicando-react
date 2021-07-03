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
        marginRight:"20px",
    },
    scmedia:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    followers:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    },
    row:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    
})

function Bigsquare(props) {
    const { classes,colores,logos,colortext,numero,colornumero,arrow,colorarrow,followers,colorcard } = props
    
    return (
        <ThemeProvider theme={theme}>
            <Paper
            className={classes.redes} 
            style={{height:"220px",width:"280px",backgroundColor:colorcard,}} elevation={3}
            >
            <Box style={{background:colores,width:"100%",height:"5px",borderRadius:"5px"}}></Box>
            <Box className={classes.scmedia} style={{width:"100%",height:"50px"}}>
               <img style={{color:colores}} alt="" src={logos}></img> 
               <span style={{fontWeight:700,color:colortext,fontSize:"14px",marginLeft:"10px"}}>@Rinel</span>
            </Box>
            <Box className={classes.followers} style={{width:"100%",height:"auto"}}>
               <span style={{color:colornumero,fontWeight:700,fontSize:"60px"}}>{numero}</span>
               <span style={{letterSpacing:"5px",fontWeight:400,color:"hsl(228, 34%, 66%)"}}>
                   FOLLOWERS
               </span> 
            </Box>
            <Box className={classes.row} style={{width:"100%",height:"auto",marginTop:"20px"}}>
                <img style={{color:colorarrow}} alt="" src={arrow}></img>
                <span style={{color:colorarrow,fontWeight:700}}>{followers}</span>
            </Box>
            </Paper>
        </ThemeProvider>
    )
}

export default withStyles(useStyles)(Bigsquare)
