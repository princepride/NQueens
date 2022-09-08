import React from "react";
import QueenNodes from "./QueenNodes";
import "./MultipleQueen.css"


const MultipleQueen = (props) => {
    const {matrixList,n} = props;
    const matrixNums = matrixList.length;

    const createMultipleQueen = ()=>{
        const multipleQueen = []
        for (let i=0; i<matrixNums; i++){
            multipleQueen.push(
                <QueenNodes 
                    key={`matrix-${n}-${i}`}
                    matrix = {matrixList[i]}
                    id = {i}
                ></QueenNodes>
            )
        }
        return multipleQueen;
    }
    return (
        <div
            className="multiple-queens"
        >
    {createMultipleQueen()}
        </div>
    )
}

export default MultipleQueen;