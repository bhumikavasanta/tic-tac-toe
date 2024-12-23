import React, { useState } from 'react';

const Player = ({ name, symbol, isActive, onChangeName }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handleClick = () => {
        setIsEditing((editing) => !editing);
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className='player'>
                {
                    isEditing ? (
                        <input type='text' required value={playerName} onChange={handleChange}></input>
                    ) : (
                        <span className='player-name'>
                            {playerName}
                        </span>
                    )
                }
                <span className='player-symbol'>
                    {symbol}
                </span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
};


export default Player;
