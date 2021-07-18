import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



function Tours({tours}) {
    return (
        <div>
            {
                tours.map(item=>(
                    <Card key={item.id} style={{width:"300px",height:"300px",marginTop:"15px"}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={item.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <span>
                          {item.name}{item.price}
                        </span>
                        <span>
                          {item.info.substring(0,100)}
                        </span>
                      </CardContent>
                    </CardActionArea>
                    <Button variant="contained" color="secondary">
                        Eliminar
                    </Button>
                  </Card>
                ))
            }
        </div>
    )
}

export default Tours

