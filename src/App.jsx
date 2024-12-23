import Logo from './assets/game-logo.png';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './WinningCombinations';
import GameOver from './components/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';
      if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  })

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

    for(const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

  const deriveWinner = (gameBoard, players) => {
    let winner = null;

    for(const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
  
      if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        winner = players[firstSquareSymbol];
      }
    }

    return winner;
  }

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

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

  const handleRestart = () => {
    setGameTurns([]);
  }

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
        return {
            ...prevPlayers,
            [symbol]: newName
        };
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
            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
          </ol>
          {
            (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />
          }
          <GameBoard
            onSelectSquare={handleSelectSquare}
            board={gameBoard}
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
