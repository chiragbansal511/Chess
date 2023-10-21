import Box from "./boxcomponent.js"
import React, { useState } from 'react';
import './App.css';

function App() {

  const [box, setbox] = useState([['10', '20', '30', '40', '50', '30', '20', '10'],
  ['60', '60', '60', '60', '60', '60', '60', '60'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['600', '600', '600', '600', '600', '600', '600', '600'],
  ['100', '200', '300', '400', '500', '300', '200', '100']])

  const [player, setplayer] = useState(1)
  const [term , setterm] = useState(1);
  const [posrow, setposrow] = useState(null)
  const [poscolumn, setposcolumn] = useState(null)


  function change_position(row, column) {
    const nextbox = box.slice();
    nextbox[row][column] = box[posrow][poscolumn];
    nextbox[posrow][poscolumn] = null;
    setbox(nextbox);
    setterm(term+1);
  }

  function soldierpos(row, column) {

    if (posrow === 1 && column === poscolumn && (row === 2 || row === 3) && box[row][column] === null) change_position(row, column);

    else if (posrow === 6 && column === poscolumn && (row === 5 || row === 4) && box[row][column] === null) change_position(row, column);

    else if (column === poscolumn && (row === posrow + 1 || row === posrow - 1) && box[row][column] === null) change_position(row, column);

    else if (box[posrow][poscolumn] >= 100 && box[posrow][poscolumn] <= 600 && (row === posrow + 1 || row === posrow - 1) && (column === poscolumn + 1 || column === poscolumn - 1) && box[row][column] >= 10 && box[row][column] <= 60) change_position(row, column);

    else if (box[posrow][poscolumn] >= 10 && box[posrow][poscolumn] <= 60 && (row === posrow + 1 || row === posrow - 1) && (column === poscolumn + 1 || column === poscolumn - 1) && box[row][column] >= 100 && box[row][column] <= 600) change_position(row, column);

    else { }
  }

  function rook_position(row, column) {
    if ((!(box[row][column] <= 600 && box[row][column] >= 100) && box[posrow][poscolumn] <= 600 && box[posrow][poscolumn] >= 100) || (box[posrow][poscolumn] <= 60 && box[posrow][poscolumn] >= 10 && !(box[row][column] <= 60 && box[row][column] >= 10))) {
      if (row === posrow || column === poscolumn) 
      {
        change_position(row, column);
      }
    }
  }

  function hourse_position(row, column) {
    if ((!(box[row][column] <= 600 && box[row][column] >= 100) && box[posrow][poscolumn] <= 600 && box[posrow][poscolumn] >= 100) || (box[posrow][poscolumn] <= 60 && box[posrow][poscolumn] >= 10 && !(box[row][column] <= 60 && box[row][column] >= 10))){ if ((row === posrow + 2 || row === posrow - 2) && (column === poscolumn - 1 || column === poscolumn + 1)) change_position(row, column); }
  }

  function bishop_position(row, column) {
    if ((!(box[row][column] <= 600 && box[row][column] >= 100) && box[posrow][poscolumn] <= 600 && box[posrow][poscolumn] >= 100) || (box[posrow][poscolumn] <= 60 && box[posrow][poscolumn] >= 10 && !(box[row][column] <= 60 && box[row][column] >= 10))) { if (Math.abs(column - poscolumn) === Math.abs(row - posrow)) change_position(row, column); }
  }

  function king_position(row, column) {
    if ((!(box[row][column] <= 600 && box[row][column] >= 100) && box[posrow][poscolumn] <= 600 && box[posrow][poscolumn] >= 100) || (box[posrow][poscolumn] <= 60 && box[posrow][poscolumn] >= 10 && !(box[row][column] <= 60 && box[row][column] >= 10))) { if ((row === posrow + 1 && column === poscolumn - 1) || (row === posrow + 1 && column === poscolumn) || (row === posrow + 1 && column === poscolumn + 1) || (row === posrow && column === poscolumn + 1) || (row === posrow - 1 && column === poscolumn + 1) || (row === posrow - 1 && column === poscolumn) || (row === posrow - 1 && column === poscolumn - 1) || (row === posrow && column === poscolumn - 1)) change_position(row, column); }
  }

  function queen_position(row, column) {
    if ((!(box[row][column] <= 600 && box[row][column] >= 100) && box[posrow][poscolumn] <= 600 && box[posrow][poscolumn] >= 100) || (box[posrow][poscolumn] <= 60 && box[posrow][poscolumn] >= 10 && !(box[row][column] <= 60 && box[row][column] >= 10))) {
      if ((row === posrow + 1 && column === poscolumn - 1) || (row === posrow + 1 && column === poscolumn) || (row === posrow + 1 && column === poscolumn + 1) || (row === posrow && column === poscolumn + 1) || (row === posrow - 1 && column === poscolumn + 1) || (row === posrow - 1 && column === poscolumn) || (row === posrow - 1 && column === poscolumn - 1) || (row === posrow && column === poscolumn - 1)) change_position(row, column);

      else if (Math.abs(column - poscolumn) === Math.abs(row - posrow)) change_position(row, column)

      else if (row === posrow || column === poscolumn) change_position(row, column);

      else { }
    }
  }

  function check_character(row, column) {
    
    if (player % 2 === 0)
    {
      if((term %2===0 && box[posrow][poscolumn] <=60 && box[posrow][poscolumn] >=10 )|| (term %2!==0 && box[posrow][poscolumn] <=600 && box[posrow][poscolumn] >=100))
      {
        if (box[posrow][poscolumn] === "60" || box[posrow][poscolumn] === '600') {
          soldierpos(row, column);
        }
  
        else if (box[posrow][poscolumn] === '10' || box[posrow][poscolumn] === '100') {
          rook_position(row, column);
        }
  
        else if (box[posrow][poscolumn] === '20' || box[posrow][poscolumn] === '200') {
          hourse_position(row, column);
        }
  
        else if (box[posrow][poscolumn] === '30' || box[posrow][poscolumn] === '300') {
          bishop_position(row, column);
        }
  
        else if (box[posrow][poscolumn] === '50' || box[posrow][poscolumn] === '400') {
          king_position(row, column);
        }
  
        else queen_position(row, column);
  
      }
  
    }
      else {
        setposrow(row);
        setposcolumn(column);
      }
  
      setplayer(player + 1);
  }

  return (
    <div className="mainchess">
      <div className="chessboard">

        <Box type={`white${box[0][0]}`} character={box[0][0]} onboxClick={() => check_character(0, 0)} />
        <Box type={`black${box[0][1]}`} character={box[0][1]} onboxClick={() => check_character(0, 1)} />
        <Box type={`white${box[0][2]}`} character={box[0][2]} onboxClick={() => check_character(0, 2)} />
        <Box type={`black${box[0][3]}`} character={box[0][3]} onboxClick={() => check_character(0, 3)} />
        <Box type={`white${box[0][4]}`} character={box[0][4]} onboxClick={() => check_character(0, 4)} />
        <Box type={`black${box[0][5]}`} character={box[0][5]} onboxClick={() => check_character(0, 5)} />
        <Box type={`white${box[0][6]}`} character={box[0][6]} onboxClick={() => check_character(0, 6)} />
        <Box type={`black${box[0][7]}`} character={box[0][7]} onboxClick={() => check_character(0, 7)} />


        <Box type={`black${box[1][0]}`} character={box[1][0]} onboxClick={() => check_character(1, 0)} />
        <Box type={`white${box[1][1]}`} character={box[1][1]} onboxClick={() => check_character(1, 1)} />
        <Box type={`black${box[1][2]}`} character={box[1][2]} onboxClick={() => check_character(1, 2)} />
        <Box type={`white${box[1][3]}`} character={box[1][3]} onboxClick={() => check_character(1, 3)} />
        <Box type={`black${box[1][4]}`} character={box[1][4]} onboxClick={() => check_character(1, 4)} />
        <Box type={`white${box[1][5]}`} character={box[1][5]} onboxClick={() => check_character(1, 5)} />
        <Box type={`black${box[1][6]}`} character={box[1][6]} onboxClick={() => check_character(1, 6)} />
        <Box type={`white${box[1][7]}`} character={box[1][7]} onboxClick={() => check_character(1, 7)} />

        <Box type={`white${box[2][0]}`} character={box[2][0]} onboxClick={() => check_character(2, 0)} />
        <Box type={`black${box[2][1]}`} character={box[2][1]} onboxClick={() => check_character(2, 1)} />
        <Box type={`white${box[2][2]}`} character={box[2][2]} onboxClick={() => check_character(2, 2)} />
        <Box type={`black${box[2][3]}`} character={box[2][3]} onboxClick={() => check_character(2, 3)} />
        <Box type={`white${box[2][4]}`} character={box[2][4]} onboxClick={() => check_character(2, 4)} />
        <Box type={`black${box[2][5]}`} character={box[2][5]} onboxClick={() => check_character(2, 5)} />
        <Box type={`white${box[2][6]}`} character={box[2][6]} onboxClick={() => check_character(2, 6)} />
        <Box type={`black${box[2][7]}`} character={box[2][7]} onboxClick={() => check_character(2, 7)} />

        <Box type={`black${box[3][0]}`} character={box[3][0]} onboxClick={() => check_character(3, 0)} />
        <Box type={`white${box[3][1]}`} character={box[3][1]} onboxClick={() => check_character(3, 1)} />
        <Box type={`black${box[3][2]}`} character={box[3][2]} onboxClick={() => check_character(3, 2)} />
        <Box type={`white${box[3][3]}`} character={box[3][3]} onboxClick={() => check_character(3, 3)} />
        <Box type={`black${box[3][4]}`} character={box[3][4]} onboxClick={() => check_character(3, 4)} />
        <Box type={`white${box[3][5]}`} character={box[3][5]} onboxClick={() => check_character(3, 5)} />
        <Box type={`black${box[3][6]}`} character={box[3][6]} onboxClick={() => check_character(3, 6)} />
        <Box type={`white${box[3][7]}`} character={box[3][7]} onboxClick={() => check_character(3, 7)} />

        <Box type={`white${box[4][0]}`} character={box[4][0]} onboxClick={() => check_character(4, 0)} />
        <Box type={`black${box[4][1]}`} character={box[4][1]} onboxClick={() => check_character(4, 1)} />
        <Box type={`white${box[4][2]}`} character={box[4][2]} onboxClick={() => check_character(4, 2)} />
        <Box type={`black${box[4][3]}`} character={box[4][3]} onboxClick={() => check_character(4, 3)} />
        <Box type={`white${box[4][4]}`} character={box[4][4]} onboxClick={() => check_character(4, 4)} />
        <Box type={`black${box[4][5]}`} character={box[4][5]} onboxClick={() => check_character(4, 5)} />
        <Box type={`white${box[4][6]}`} character={box[4][6]} onboxClick={() => check_character(4, 6)} />
        <Box type={`black${box[4][7]}`} character={box[4][7]} onboxClick={() => check_character(4, 7)} />

        <Box type={`black${box[5][0]}`} character={box[5][0]} onboxClick={() => check_character(5, 0)} />
        <Box type={`white${box[5][1]}`} character={box[5][1]} onboxClick={() => check_character(5, 1)} />
        <Box type={`black${box[5][2]}`} character={box[5][2]} onboxClick={() => check_character(5, 2)} />
        <Box type={`white${box[5][3]}`} character={box[5][3]} onboxClick={() => check_character(5, 3)} />
        <Box type={`black${box[5][4]}`} character={box[5][4]} onboxClick={() => check_character(5, 4)} />
        <Box type={`white${box[5][5]}`} character={box[5][5]} onboxClick={() => check_character(5, 5)} />
        <Box type={`black${box[5][6]}`} character={box[5][6]} onboxClick={() => check_character(5, 6)} />
        <Box type={`white${box[5][7]}`} character={box[5][7]} onboxClick={() => check_character(5, 7)} />

        <Box type={`white${box[6][0]}`} character={box[6][0]} onboxClick={() => check_character(6, 0)} />
        <Box type={`black${box[6][1]}`} character={box[6][1]} onboxClick={() => check_character(6, 1)} />
        <Box type={`white${box[6][2]}`} character={box[6][2]} onboxClick={() => check_character(6, 2)} />
        <Box type={`black${box[6][3]}`} character={box[6][3]} onboxClick={() => check_character(6, 3)} />
        <Box type={`white${box[6][4]}`} character={box[6][4]} onboxClick={() => check_character(6, 4)} />
        <Box type={`black${box[6][5]}`} character={box[6][5]} onboxClick={() => check_character(6, 5)} />
        <Box type={`white${box[6][6]}`} character={box[6][6]} onboxClick={() => check_character(6, 6)} />
        <Box type={`black${box[6][7]}`} character={box[6][7]} onboxClick={() => check_character(6, 7)} />

        <Box type={`black${box[7][0]}`} character={box[7][0]} onboxClick={() => check_character(7, 0)} />
        <Box type={`white${box[7][1]}`} character={box[7][1]} onboxClick={() => check_character(7, 1)} />
        <Box type={`black${box[7][2]}`} character={box[7][2]} onboxClick={() => check_character(7, 2)} />
        <Box type={`white${box[7][3]}`} character={box[7][3]} onboxClick={() => check_character(7, 3)} />
        <Box type={`black${box[7][4]}`} character={box[7][4]} onboxClick={() => check_character(7, 4)} />
        <Box type={`white${box[7][5]}`} character={box[7][5]} onboxClick={() => check_character(7, 5)} />
        <Box type={`black${box[7][6]}`} character={box[7][6]} onboxClick={() => check_character(7, 6)} />
        <Box type={`white${box[7][7]}`} character={box[7][7]} onboxClick={() => check_character(7, 7)} />

      </div>
    </div>
  );
}

export default App;
