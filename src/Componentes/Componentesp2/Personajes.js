import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

function Personajes({id,imagenes}) {
    return (
        <Card key={id} style={{width:"250px",height:"250px"}}>
            <CardActionArea style={{width:"100%",height:"130px"}}>
                <CardMedia src={imagenes}>

                </CardMedia>
            </CardActionArea>
            <CardContent style={{width:"auto",height:"100%",border:"1px yellow solid"}}>
                
            </CardContent>
        </Card>
    )
}

export default Personajes
