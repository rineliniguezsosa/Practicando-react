import Nav from './Componentes/Nav'
import Proyecto1 from './Componentes/Proyecto1'
import Proyecto2 from './Componentes/Proyecto2'
import Proyecto3 from './Componentes/Proyecto3'
import Proyecto4 from './Componentes/Proyecto4'
import Proyecto5 from './Componentes/Proyecto5'
import Proyecto6 from './Componentes/Proyecto6'
import Proyecto7 from './Componentes/Proyecto7'
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
        <Route exact path="/Proyecto4" component={Proyecto4}></Route>
        <Route exact path="/Proyecto5" component={Proyecto5}></Route>
        <Route exact path="/Proyecto6" component={Proyecto6}></Route>
        <Route exact path="/Proyecto7" component={Proyecto7}></Route>
      </Router>  
    </Box>    
  )
}

export default App
