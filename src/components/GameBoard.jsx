import React, { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();

    }

    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {
                                row.map((symbol, colIndex) => (
                                    <li key={colIndex}>
                                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                                            {symbol}
                                        </button>
                                    </li>
                                ))
                            }
                        </ol>
                    </li>
                ))
            }
        </ol>
    );
};


export default GameBoard;
