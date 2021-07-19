import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

function Tour({id,name,info,price,image,Eliminartours}){
    const [read, setRead] = useState(false)
    return(
            <Card key={id} style={{width:"400px",marginTop:"15px"}}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={image}
                        title="Contemplative Reptile"
                    />
                      <CardContent style={{height:"auto"}}>
                        <Box style={{display:"flex",justifyContent:"space-between"}}>
                        <span>{name}</span><span>Precio:${price}</span>
                        </Box>
                        <br></br><br></br>
                        <span style={{fontSize:"14px"}}>
                          {read ? info : info.substring(0,100)}
                          <Link onClick={()=> setRead(!read)}>{read ? "...Leer menos": "...Leer más" }</Link>
                        </span>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardContent>
                    <Button onClick={()=> Eliminartours(id)} style={{width:"100%"}} variant="contained" color="secondary">
                        Eliminar
                    </Button>
                    </CardContent>
            </Card>
    )
}

export default Tour