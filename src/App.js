import Nav from './Componentes/Nav'
import Proyecto1 from './Componentes/Proyecto1'
import Proyecto2 from './Componentes/Proyecto2'
import Proyecto3 from './Componentes/Proyecto3'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Box from '@material-ui/core/Box'



function App() {
  return (
    <Box className="App" >
      <Router>
      <Nav></Nav>
        <Route exact path="/" component={Proyecto1}></Route>
        <Route exact path="/Proyecto2" component={Proyecto2}></Route>
        <Route exact path="/Proyecto3" component={Proyecto3}></Route>
      </Router>  
    </Box>    
  )
}

export default App
