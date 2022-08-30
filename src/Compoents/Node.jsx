import React from "react";
import "./Node.css";

const Node = (props) =>{
    const {isQueen,row,col,id,n} = props;

    const classType = () =>{
        let className = "node";
        if(isQueen){
            className += " node-queen"
        }
    }

    return (
        <div
        key = {`node-${n}-${id}-${row}-${col}`}
        className={classType()}
        ></div>
    )
}

export default Node;