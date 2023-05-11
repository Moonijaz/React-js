# Rock, Paper, Scissors Game

Welcome to the Rock, Paper, Scissors game, a simple web-based implementation using React. This project consists of two components: `Game` and `App`, which together create a fun and interactive game.

## Game Component

The `Game` component is responsible for managing the game logic and rendering the user interface. Here's how it works:

- It allows you to play Rock, Paper, Scissors against the computer.
- The game logic is implemented in the `logic` function, which determines the winner of each round.
- Your choices and scores are displayed on the screen in real-time.

## App Component

The `App` component serves as the entry point of the application and renders the `Game` component. It sets up the React environment and is responsible for displaying the game to the user.

## How to Play

1. Clone this repository to your local machine.

   ```shell
   git clone https://github.com/your-username/rock-paper-scissors.git
Change to the project directory.

shell
Copy code
cd rock-paper-scissors
Install the required dependencies.

shell
Copy code
npm install
Start the development server.

shell
Copy code
npm start
Open your web browser and visit http://localhost:3000.

Click the "Rock," "Paper," or "Scissors" buttons in the user interface to make your choice. The computer will randomly select its choice.

The game will determine the winner of each round and update your scores accordingly.

Enjoy playing the game and see if you can beat the computer!

Game Rules
Rock beats Scissors.
Scissors beat Paper.
Paper beats Rock.
If both you and the computer make the same choice, the round is a tie.

Technologies Used
React
JavaScript
HTML
CSS
npm (Node Package Manager)