import Logo from './assets/game-logo.png';
import Player from './components/Player';

function App() {



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
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          Game Board
        </div>
        Log
      </main>
    </>
  )
}

export default App
