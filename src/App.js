import './App.css';
import NQueen from './Compoents/NQueen'

function App() {
  //let res = solveNQueens(8)
  //let matrix = res[1]
  return (
    <div className="App">
      <NQueen nums={10}/>
      {/*<QueenNodes 
      matrix = {matrix}
      id = {1}
      />*/}
    </div>
  );
}

export default App;
