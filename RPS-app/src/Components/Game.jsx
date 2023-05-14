import React, { useState } from "react";
import './Game.css'; // Import the CSS file

function Game() {
  // Define state variables for player's choice, computer's choice, and scores
  const [playerVal, setPlayerVal] = useState(null);
  const [computerVal, setComputerVal] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  // Logic to determine the winner of a round
  const logic = (playerVal, computerVal) => {
    if (playerVal === computerVal) {
      return 0; // It's a tie
    } else if (
      (playerVal === "ROCK" && computerVal === "SCISSORS") ||
      (playerVal === "SCISSORS" && computerVal === "PAPER") ||
      (playerVal === "PAPER" && computerVal === "ROCK")
    ) {
      return 1; // Player wins
    } else {
      return -1; // Computer wins
    }
  };

  // Function to make a choice for the player and computer
  const decision = (playerChoice) => {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const compChoice = choices[Math.floor(Math.random() * choices.length)]; // Randomly select a choice
    const val = logic(playerChoice, compChoice); // Determine the result of the round

    if (val === 1) {
      // Player wins
      setPlayerVal(playerChoice);
      setComputerVal(compChoice);
      setPlayerScore(playerScore + 1); // Increment player's score
    } else if (val === -1) {
      // Computer wins
      setPlayerVal(playerChoice);
      setComputerVal(compChoice);
      setCompScore(compScore + 1); // Increment computer's score
    } else {
      // It's a tie
      setComputerVal(compChoice);
      setPlayerVal(playerChoice);
    }
  };

  return (
    <div className='main'>
      <div className='header'> Rock, Paper, Scissors Game</div>
      <div className='btn'>
        <button onClick={() => decision("ROCK")}>Rock</button>
        <button onClick={() => decision("PAPER")}>Paper</button>
        <button onClick={() => decision("SCISSORS")}>Scissor</button>
      </div>
      <div className="content">
        <p>Your choice: {playerVal}</p>
        <p>Computer's choice: {computerVal}</p>
        <h2>Your Score: {playerScore}</h2>
        <h2>Computer Score: {compScore}</h2>
      </div>
    </div>
  );
}

export default Game;
