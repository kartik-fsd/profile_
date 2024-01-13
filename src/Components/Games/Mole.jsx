import  { useState, useEffect, useCallback } from 'react';
import './Mole.css';

const Mole = () => {
  const [moles, setMoles] = useState(Array(9).fill(false));
  const [score, setScore] = useState(0);

  const randomMole = () => Math.floor(Math.random() * 9);

  const startGame = useCallback(() => {
    setScore(0);
    moveMole();
  }, []); // Empty dependency array as there are no dependencies

  const moveMole = () => {
    const newMoles = [...moles];
    newMoles.fill(false);

    const moleIndex = randomMole();
    newMoles[moleIndex] = true;

    setMoles(newMoles);

    setTimeout(() => {
      newMoles[moleIndex] = false;
      setMoles(newMoles);
      moveMole();
    }, 1000);
  };

  const whackMole = (index) => {
    if (moles[index]) {
      const newMoles = [...moles];
      newMoles[index] = false;
      setMoles(newMoles);
      setScore(score + 1);
    }
  };

  useEffect(() => {
    startGame();
  }, [startGame]); // Include startGame in the dependency array

  return (
    <div className="App">
      <h1>Whack-a-Mole</h1>
      <div className="game-board">
        {moles.map((mole, index) => (
          <div
            key={index}
            className={`mole ${mole ? 'up' : ''}`}
            onClick={() => whackMole(index)}
          />
        ))}
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default Mole;
