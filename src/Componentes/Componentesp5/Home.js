import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from '../../Styleproyecto5/Style'

function Home(props) {
    const {classes} = props
    return (
        <div className={classes.papa}>
            Home
        </div>
    )
}

export default withStyles(useStyles)(Home)
