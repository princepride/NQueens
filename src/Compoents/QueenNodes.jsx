import React,{useState} from 'react';
import Node from './Node';
import "./QueenNodes.css";

const QueenNodes = (props) =>{
    const {matrix,id} = props;
    const queens_num = matrix.length;
    const [x,setX] = useState(-1)
    const [y,setY] = useState(-1)
    const [inArea,setInArea] = useState(false)

    const createQueen = () => {
        const gride = [];
        for(let i = 0; i <queens_num; i++) {
            const row = [];
            for (let j = 0; j < queens_num; j++) {
            //const checkIsOver2 = () =>{
            //    if(i === x){
            //        return true;
            //    }
            //    else if(j === y){
            //        return true;
            //    }
            //    else if(x!==-1 && y!==-1){
            //        if(Math.abs(i-x)===Math.abs(j-y)){
            //            return true;
            //        }
            //    }
            //        return false;
            //    }
                if(matrix[i][j] ==='.'){
                    row.push(
                        <Node
                            key = {`node-${queens_num}-${id}-${i}-${j}`}
                            isQueen = {false}
                            j = {j}
                            i = {i}
                            setX = {setX}
                            setY = {setY}
                            x = {x}
                            y = {y}
                            inArea = {inArea}
                            setInArea = {setInArea}
                            ></Node>
                    )
                }
                else if(matrix[i][j] === 'Q'){
                    row.push(
                        <Node
                            key = {`node-${queens_num}-${id}-${i}-${j}`}
                            isQueen = {true
                            }
                            j = {j}
                            i = {i}
                            setX = {setX}
                            setY = {setY}
                            x = {x}
                            y = {y}
                            inArea = {inArea}
                            setInArea = {setInArea}
                            ></Node>
                    )
                }
            }
            gride.push(<div className="row-queen" key={`row-${queens_num}-${id}-${i}`}>{row}</div>)
        }
        return gride;
    }

    //const handleMouseOver = () =>{
    //    console.log("Mouse Over : x " + x + ", y " + y);
    //    setSignal(true);
    //}

    //const handleMouseOut = () =>{
    //    setSignal(false);
    //}
    return (
        <div
            //onMouseOver = {handleMouseOver}
            //onMouseOut = {handleMouseOut}
            className="matrix"
        >
            {createQueen()}
        </div>
    )
}

export default QueenNodes;