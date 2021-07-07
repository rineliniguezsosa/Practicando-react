import React, { Component } from 'react';
import Titulo from './Componentesp3/Titulo'
import Board from './Componentesp3/Board'

class Proyecto3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleClick = () =>{
        console.log("hdbhfb");
    }
    render() { 
        return ( 
            <div>
                <Titulo></Titulo>
                <Board onClick={this.handleClick}></Board>
            </div>
         );
    }
}
 
export default Proyecto3;