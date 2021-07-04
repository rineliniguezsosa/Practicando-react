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
    card:{
        marginRight:"20px",
        transition:"all 0.3s linear",
        display:"flex",
        flexDirection:"column",
    },
    boxes:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    box:{
        display:"flex",
        alignItems:"center",
    }
    
})
function Smallsquare(props) {
    const { classes,colorcard,titulo,icons,colortext,arrow,number,colornumero,subs,colorarrow } = props
    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={3} className={classes.card} style={{width:"280px",height:"105px",backgroundColor:colorcard}}>
             <Box className={classes.boxes} style={{width:"100%",height:"50px"}}>
              <span style={{color:colortext,fontWeight:700,marginLeft:"20px",fontSize:"15px"}}>{titulo}</span>
              <img style={{widt:"20px",height:"20px",marginRight:"20px"}} alt="" src={icons}></img>
                </Box>
                <Box className={classes.boxes} style={{width:"100%",height:"50px"}}>
                 <Box>
                 <span style={{color:colornumero,fontWeight:700,marginLeft:"20px",fontSize:"30px"}}>
                    {number}
                 </span>
                 </Box>
                 <Box className={classes.box}>
                 <img style={{widt:"5px",height:"5px",marginRight:"5px"}} alt="" src={arrow}></img>
                 <span style={{marginRight:"20px",color:colorarrow,fontWeight:700}}>{subs}</span>
                 </Box>

                </Box>
            </Paper>
        </ThemeProvider>
    )
}

export default withStyles(useStyles)(Smallsquare)
