import Logo from './assets/game-logo.png';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
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
            activePlayerSymbol={activePlayer}
          />
        </div>
        Log
      </main>
    </>
  )
}

export default App
