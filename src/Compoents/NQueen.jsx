import React from 'react';
import solveNQueens from '../Algorithm/nQueens';
import MultipleQueen from './MultipleQueen';
import "bootstrap/dist/css/bootstrap.min.css";
import {Accordion} from 'react-bootstrap';
import "./NQueen.css"
import LineChart from './LineChart';
const NQueens = (props) =>{
    const {nums} = props;
    const createMultipleQueen = () =>{
        const mulipleQueens = [];
        for(let i = 1; i < nums; i++){
             let temp = solveNQueens(i);
             mulipleQueens.push(
                <Accordion.Item eventKey={i} key = {`title-item-${i}`} className="opacity-75">

                  <Accordion.Header key = {`title-${i}`}>
                  <div className="queens-title">
                  {`The Result of ${i} Queens`}
                  </div>
                  </Accordion.Header>

                  <Accordion.Body>
                  <MultipleQueen
                    key = {`queens-${i}`}
                    matrixList = {temp}
                    n = {i}
                ></MultipleQueen>
                  </Accordion.Body>
                </Accordion.Item>
            )

        }
        return mulipleQueens;
    }
    return  (
        <>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            {createMultipleQueen()}
        </Accordion>
        <LineChart />
        </>
    ) 
    
}

export default NQueens;