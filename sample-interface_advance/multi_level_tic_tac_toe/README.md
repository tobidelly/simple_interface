Let's create a **Single Player Tic Tac Toe Game** with **10 Levels of Increasing Difficulty**. The idea is to progressively make the AI opponent more challenging. At level 1, the computer makes random moves, and by level 10, the computer plays near-perfectly.

---

### 📂 **Project Structure**

```
multi_level_tic_tac_toe/
│-- index.html
│-- styles.css
└-- script.js
```


### 🚀 **How the Game Works**

1. **Levels of Difficulty**:
   - **Level 1**: The AI makes completely random moves.
   - **Level 2-5**: The AI tries to block or win if possible, otherwise makes random moves.
   - **Level 6-10**: The AI always looks to win or block, making it progressively harder to beat.

2. **Gameplay**:
   - Select a difficulty level using the number input (1 to 10).
   - Click on an empty cell to make your move.
   - The computer will respond based on the selected difficulty.
   - The game ends when a player wins or it's a draw.

3. **Reset Button**:
   - Resets the game board and allows you to select a new difficulty.
