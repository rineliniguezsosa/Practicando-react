import React from 'react'
import Square from './Square'

function Board(props) {
    const { onClick } = props
    return (
        <div>
            <Square value={1} onClick={()=> onClick("nd") }></Square>
            <Square value={2} onClick={()=> onClick("nd") }></Square>
            <Square value={3} onClick={()=> onClick("nd") }></Square>
            <Square value={4} onClick={()=> onClick("nd") }></Square>
            <Square value={5} onClick={()=> onClick("nd") }></Square>
            <Square value={6} onClick={()=> onClick("nd") }></Square>
            <Square value={7} onClick={()=> onClick("nd") }></Square>
            <Square value={8} onClick={()=> onClick("nd") }></Square>
            <Square value={9} onClick={()=> onClick("nd") }></Square>
        </div>
    )
}

export default Board
