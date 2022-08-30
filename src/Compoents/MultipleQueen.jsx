import React from "react";
import QueenNodes from "./QueenNodes";


const MultipleQueen = (props) => {
    const {res,n} = props;
    const nums = res.length;

    const createMultipleQueen = ()=>{
        const MultipleQueen = []
        for (let i=0; i<nums; i++){
            MultipleQueen.push(
                <QueenNodes 
                
                ></QueenNodes>
            )
        }
    }
}

export default MultipleQueen;