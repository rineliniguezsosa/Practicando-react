import React from 'react'
import { BrowserRoute as Router,Route,Switch} from 'react-router-dom'
import Home from './Views/Home'
import About from './Views/About'
import Nav from './Componentesp7/Nav'


function Proyecto7() {
    return (
        <Router>
            <Nav></Nav>
            <Switch>
                <Route path='/' component={Home}></Route>
                <Route path='/' component={About}></Route>
            </Switch>
        </Router>
    )
}

export default Proyecto7
