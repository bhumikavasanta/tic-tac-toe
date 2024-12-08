import Logo from './assets/game-logo.png';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';
      if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

return currentPlayer;
}

function App() {

  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [ { 
        square: {
          row: rowIndex,
          col: colIndex
        },
        player: currentPlayer
       } , ...prevTurns];
       return updatedTurns;
    });
  }

  return (

    <>
      <header>
        <img src={Logo} alt="Game Logo" />
        <h1>
          Tic-Tac-Toe
        </h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player'>
            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            turns={gameTurns}
          />
        </div>
        <Log
          turns={gameTurns}
        />
      </main>
    </>
  )
}

export default App
