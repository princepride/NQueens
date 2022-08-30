import React from 'react';
import Node from './Node';

const QueenNodes = (props) =>{
    const {matrix,id} = props;
    const queens_num = matrix.length;

    const createQueen = (matrix,id) => {
        const gride = [];
        for(let i = 0; i <queens_num; i++) {
            const row = [];
            for (let j = 0; j < res.length; j++) {
                if(matrix[i][j] ==='.'){
                    row.push(
                        <Node
                            isQueen = {false}
                            col = {j}
                            row = {i}
                            id = {id}
                            n = {n}
                            ></Node>
                    )
                }
                else if(matrix[i][j] === 'Q'){
                    row.push(
                        <Node
                            isQueen = {true
                            }
                            col = {j}
                            row = {i}
                            id = {id}
                            n = {n}
                            ></Node>
                    )
                }
            }
            gride.push
        }
    }
}

export default QueenNodes;