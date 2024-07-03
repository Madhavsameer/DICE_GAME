import React, { useState } from 'react';
import './DiceGame.css';

const DiceGame = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [rolledNumber, setRolledNumber] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [error, setError] = useState('');
  const [rotate, setRotate] = useState(false);

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    setError('');
  };

  const rollDice = () => {
    if (selectedNumber === null) {
      setError('You have not selected any number');
      return;
    }
    const number = Math.floor(Math.random() * 6) + 1;
    setRolledNumber(number);

    if (number === selectedNumber) {
      setTotalScore((prevScore) => prevScore + number);
    } else {
      setTotalScore((prevScore) => prevScore - 2);
    }

    // Toggle rotation state
    setRotate(!rotate);
  };

  const resetScore = () => {
    setTotalScore(0);
    setRolledNumber(null);
    setSelectedNumber(null);
    setError('');
    setRotate(false);
  };

  return (
    <div className="dice-game">
      <div className="number-selection">
        <h3>Select Number</h3>
        <div className="number-buttons">
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <button
              key={number}
              className={selectedNumber === number ? 'selected' : ''}
              onClick={() => handleNumberSelect(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>

      <div className="score">
        <h2>Total Score</h2>
        <div>{totalScore}</div>
      </div>

      <div className="dice-roll">
        <button onClick={rollDice}>
          <img
            id="myimg"
            className={rotate ? 'rotate' : ''}
            src="https://static.vecteezy.com/system/resources/previews/009/385/437/original/casino-dice-clipart-design-illustration-free-png.png"
            alt="Dice"
          />
        </button>
        {rolledNumber && (
          <div>
            <h4>Rolled Number: {rolledNumber}</h4>
          </div>
        )}
      </div>

      <div className="reset">
        <button onClick={resetScore}>Reset Score</button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="rules">
        <button onClick={() => alert('Rules:\n\n1. Select any number.\n2. Click on dice to roll.\n3. If selected number is equal to dice number, you will get the same points.\n4. If wrong guess, then 2 points will be deducted.')}>
          Show Rules
        </button>
      </div>
    </div>
  );
};

export default DiceGame;
