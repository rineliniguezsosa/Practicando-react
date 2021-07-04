import React, { useState,useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import logo from '../Imagenes/logopokemon.png'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import axios from 'axios'
import { Typography } from '@material-ui/core'
import { useStyles } from '../Styleproyecto1/Style.js'


function Proyecto1(props) {

    const {classes} = props
    const [api, setApi] = useState(`https://pokeapi.co/api/v2/pokemon/`)
    const [siguiente, setSiguiente] = useState()
    const [antes, setAntes] = useState()
    const [datos, setDatos] = useState([])
    const [pokemon, setPokemon] = useState()
    const [img, setImg] = useState()
    const [nombre, setNombre] = useState()
    const [movimiento, setMovimiento] = useState()
    const [especie, setEspecie] = useState()
    const [tipo, setTipo] = useState()
    
    useEffect(() => {
        
        axios.get(api)
        .then(response=>{
            setDatos(response.data.results)
            setSiguiente(response.data.next)
            setAntes(response.data.previous)
        })
        .catch(error=>{
            console.log("NO SE ENCONTRO EL POKEMON",error);
        })
    }, [api])
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response =>{
            setPokemon(response.data.name)
            setImg(response.data.sprites.front_default)
            setNombre(response.data.name)
            setMovimiento(response.data.moves[0]['move'].name)
            setEspecie(response.data.species.name)
            setTipo(response.data.types[0]['type'].name)  
        })
    }, [pokemon])

    const Siguiente = () => {
        setApi(siguiente)
    }
    const Antes = () => {
        setApi(antes)
    }

    return (
        <Grid className={classes.box} style={{maxWidth:"100%"}} container >
            <Box className={classes.head} style={{  width:"100%",height:"60px",backgroundColor:"#EF5350",}}>
                <figure>
                    <img width="50px" height="50px" alt="" src={logo}></img>
                </figure>
            </Box> 
            <Box className={classes.box2} style={{ width:"100%",height:"550px",backgroundColor:"#E7EAED",}}>
                <Box style={{ width:"400px",height:"450px"}}>
                    <Box className={classes.main} style={{width:"100%",height:"80px",display:"flex"}}>
                        <Box className={classes.crblue} style={{  width:"60px",height:"60px",}}></Box>
                        <Box className={classes.crred} style={{width:"10px",height:"10px",}}></Box>
                        <Box className={classes.cryellow} style={{ width:"10px",height:"10px",}}></Box>
                        <Box className={classes.crgreen} style={{ width:"10px",height:"10px",}}></Box>
                    </Box>
                    <Box className={classes.display} style={{width:"100%",height:"350px", display:"flex",}}>
                        <Box className={classes.screen} style={{  width:"80%",height:"250px"}}>
                            <Box className={classes.dots} style={{width:"100%",height:"10px",display:"flex",}}>
                                <Box className={classes.puntos} style={{width:"10px",height:"10px"}}></Box>
                                <Box className={classes.puntos} style={{width:"10px",height:"10px"}}></Box>
                            </Box>
                            <Box className={classes.box4} style={{width:"100%",height:"230px",display:"flex"}}>
                                {nombre ?
                                <Card className={classes.root} style={{ width:"80%",height:"100px"}}>
                                    <CardActionArea className={classes.action}>
                                        <Avatar alt="pokemon" src={img} className={classes.large}></Avatar>
                                    </CardActionArea>
                                    <CardContent className={classes.descripciones}>
                                        <Typography className={classes.size} variante="h6">Name:{nombre}</Typography>
                                        <Typography className={classes.size} variante="h6">Moves:{movimiento}</Typography>
                                        <Typography className={classes.size} variante="h6">Species:{especie}</Typography>
                                        <Typography className={classes.size} variante="h6">Type:{tipo}</Typography>
                                    </CardContent>
                                </Card>
                                : null
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.barra} style={{width:"20px",height:"450px", borderRadius:"5px"}}>
                    <Box className={classes.clip} style={{width:"20px",height:"40px"}}></Box>
                    <Box className={classes.clipwhite} style={{width:"5px",height:"310px"}}></Box>
                    <Box className={classes.clip} style={{width:"20px",height:"40px"}}></Box>
                </Box>
                <Box className={classes.pokedex2}style={{width:"400px",height:"450px",}}>
                    <Box className={classes.pokemoncont} style={{ width:"100%",height:"300px"}}>
                        <Box className={classes.pokemonlist} style={{width:"80%",height:"250px"}}>
                           { datos.map(item=>(
                               <Link onClick={()=>setPokemon(item.name)} key={item.url} style={{color:"white"}} >
                                 {item.name}
                               </Link>
                            ))
                           }
                        </Box>
                    </Box>
                    <Box className={classes.cuadros} style={{ width:"100%",height:"60px",}}>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                        <Box className={classes.cuadritos} style={{width:"20px",height:"20px"}}></Box>
                    </Box>
                    <Box className={classes.botones} style={{ width:"100%",height:"90px"}}>
                        <ButtonGroup variant="contained"style={{backgroundColor:"white",marginLeft:"40px"}} aria-label="">
                          <Button size="small" onClick={Antes}>Previous</Button>
                          <Button size="small" onClick={Siguiente}>Next</Button>
                        </ButtonGroup>
                    </Box>
                </Box>   
            </Box>     
        </Grid>
    )
}

export default withStyles(useStyles)(Proyecto1)
