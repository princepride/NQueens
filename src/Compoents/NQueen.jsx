import React from 'react';
import solveNQueens from '../Algorithm/nQueens';
import MultipleQueen from './MultipleQueen';
const NQueens = (props) =>{
    const {n} = props;

    var res = solveNQueens(n);
    var num = res.length;
    //return <h1>"hello"</h1>
    return   
    <>
        <h2>{n} Queens Has {num} Answers</h2>
        <MultipleQueen res = {res} n = {n}/>
    </>
}

export default NQueens;