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
        border:"1px red solid",
        display:"flex",
        flexDirection:"column",
        
    }
})
function Bigsquare(props) {
    const {classes} = props
    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.redes} style={{height:"auto",width:"280px"}} elevation={3}>
                <Box style={{width:"100%",height:"10px",border:"1px red solid"}}>   
                </Box>
            </Paper>
        </ThemeProvider>
    )
}

export default withStyles(useStyles)(Bigsquare)
