import React, { useState,useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import logo from '../Imagenes/logopokemon.png'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import axios from 'axios'


const useStyles = () =>({
    box:{
        maxWidth:"100%",
        border:"1px green solid",
    },
    head:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    box2:{
        border:"1px red solid",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    },
    barra:{
        width:"20px",
        height:"500px",
        border:"3px #89061C solid",
        borderRadius:"5px",
        display:"flex",
        backgroundColor:"#DC0A2D",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"stretch",
    },
    clip:{
        width:"20px",
        height:"40px",
        border:"2px #000 solid",
        borderRadius:"5px",
    },
    clipwhite:{
        width:"5px",
        height:"310px",
        backgroundColor:"#E9667C",
        border:"none",
        marginLeft:"4px",
    },
    main:{
        width:"100%",
        height:"80px",
        backgroundColor:"#DC0A2D",
        borderBottom:"9px #89061C solid",
        display:"flex",
        flexDirection:"row",
        padding:"5px",
    },
    crblue:{
        width:"60px",
        height:"60px",
        borderRadius:"90%",
        backgroundColor:"#28AAFD",
        border:"3px white solid",
    },
    crred:{
        width:"10px",
        height:"10px",
        borderRadius:"90%",
        backgroundColor:"#A20620",
        border:"1px #000 solid",
        marginRight:"5px",
        marginLeft:"10px",
    },
    cryellow:{
        width:"10px",
        height:"10px",
        borderRadius:"90%",
        backgroundColor:"#A4900F",
        border:"1px #000 solid",
        marginRight:"5px",
        
    },
    crgreen:{
        width:"10px",
        height:"10px",
        borderRadius:"90%",
        backgroundColor:"#5BAA67",
        border:"1px #000 solid",     
    },
    display:{
        width:"100%",
        height:"200px",
        border:"1px #000 solid",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#DC0A2D",
    },
    screen:{
        width:"80%",
        height:"150px",
        border:"1px red solid",
        backgroundColor:"#DEDEDE",
    },
    dots:{
        width:"100%",
        height:"10px",
        display:"flex",
        marginTop:"5px",
        justifyContent:"center",
    },
    puntos:{
        width:"10px",
        height:"10px",
        backgroundColor:"#89061C",
        marginRight:"10px",
        borderRadius:"90%",
    },
    pokedex2:{
        width:"400px",
        height:"500px",
        border:"1px red solid", 
    },
    pokemoncont:{
        width:"100%",
        height:"300px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#DC0A2D",
    },
    pokemonlist:{
        width:"80%",
        height:"250px",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        padding:"10px",
        backgroundColor:"#232323",
    },
    cuadros:{
        width:"100%",
        height:"60px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        backgroundColor:"#DC0A2D",
    },
    cuadritos:{
        width:"20px",
        height:"20px",
        border:"1px #000 solid",
        backgroundColor:"#28AAFD",
    },
    botones:{
        width:"100%",
        height:"90px",
        border:"1px red solid",
        backgroundColor:"#DC0A2D",
    },
}) 

function Proyecto1(props) {

    const {classes} = props
    const [api, setApi] = useState(`https://pokeapi.co/api/v2/pokemon/`)
    const [siguiente, setSiguiente] = useState()
    const [antes, setAntes] = useState()
    const [datos, setDatos] = useState([])
    const [pokemon, setPokemon] = useState()
    
    

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
            console.log(response.data.name)
            setPokemon(response.data.name)
        })
    }, [pokemon])

    const Siguiente = () => {
        setApi(siguiente)
    }
    const Antes = () => {
        setApi(antes)
    }
    
    
    return (
        <Grid className={classes.box} container >
            <Box className={classes.head} style={{  width:"100%",height:"60px",backgroundColor:"#EF5350",}}>
                <figure>
                    <img width="50px" height="50px" alt="" src={logo}></img>
                </figure>
            </Box> 
            <Box className={classes.box2} style={{ width:"100%",height:"550px",backgroundColor:"#E7EAED",}}>
                <Box style={{ width:"400px",height:"500px",border:"1px red solid",}}>
                    <Box className={classes.main}>
                        <Box className={classes.crblue}></Box>
                        <Box className={classes.crred}></Box>
                        <Box className={classes.cryellow}></Box>
                        <Box className={classes.crgreen}></Box>
                    </Box>
                    <Box className={classes.display}>
                        <Box className={classes.screen}>
                            <Box className={classes.dots}>
                                <Box className={classes.puntos}></Box>
                                <Box className={classes.puntos}></Box>
                            </Box>
                            <Card>

                            </Card>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.barra}>
                    <Box className={classes.clip}></Box>
                    <Box className={classes.clipwhite}></Box>
                    <Box className={classes.clip}></Box>
                </Box>
                <Box className={classes.pokedex2}>
                    <Box className={classes.pokemoncont}>
                        <Box className={classes.pokemonlist}>
                           { datos.map(item=>(
                            //    <span style={{color:"white"}} key={item.url}>{item.name}</span>
                               <Link onClick={()=>setPokemon(item.name)} key={item.url} style={{color:"white"}} >
                                 {item.name}
                               </Link>
                            ))
                           }
                        </Box>
                    </Box>
                    <Box className={classes.cuadros}>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                        <Box className={classes.cuadritos}></Box>
                    </Box>
                    <Box className={classes.botones}>
                        <ButtonGroup variant="contained"style={{backgroundColor:"white",marginLeft:"40px"}} aria-label="">
                          <Button onClick={Antes}>Previous</Button>
                          <Button onClick={Siguiente}>Next</Button>
                        </ButtonGroup>
                    </Box>
                </Box>   
            </Box>
                
        </Grid>
    )
}


export default withStyles(useStyles)(Proyecto1)
