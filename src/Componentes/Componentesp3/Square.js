import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const useStyles = () => ({
    sqr:{
        fontSize:"30px",
    },
    direction:{
        display:"flex",
        flexDirection:"row",
    },
})

function Square(props) {
    const { classes,value,onClick } = props
    return (
        <div className={classes.direction} style={{width:"100%"}}>
            <Button className={classes.sqr} onClick={onClick} variant="outlined" color="primary">
              {value}
            </Button>
        </div>
    )
}

export default withStyles(useStyles)(Square)
