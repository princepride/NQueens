import React, {useState} from "react";
import "./Node.css";

const Node = (props) =>{
    const {isQueen,j,i,setX,setY,x,y, inArea,setInArea} = props;
    const [isOver,setOver] = useState(false);
    //const [isOver2,setOver2] = useState(false);
    //let isOver = false;

    const handleMouseOver = () => {
        //console.log("Mouse Over : x " + i + ", y " + j);
        setX(i);
        setY(j);
        setOver(true);
        setInArea(true);
    }

    const handleMouseOut = () => {
        setX(-1);
        setY(-1);
        setOver(false);
        setInArea(false);
    }

    const checkIsOver2 = () =>{
        if(i === x){
            return true;
        }
        if(j === y){
            return true;
        }
        if(x!==-1 && y!==-1){
            if(Math.abs(i-x)===Math.abs(j-y)){
                return true;
            }
        }
        return false;
    }

    const classType = () =>{
        let className = "node-original";
        if(isQueen){
            className += " node-queen"
        }
        if(isOver){
            className += " node-over"
        }
        if(inArea){
            if(checkIsOver2()){
                //console.log(signal);
                //console.log("x:"+x+"y"+y+"i:"+i+"j"+j)
                className += " node-over"
            }
        }
        return className;
    }

    return (
        <div
        className={classType()}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        ></div>
    )
}

export default Node;