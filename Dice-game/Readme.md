# Dice Game

A small browser-based dice game for one player and the computer. Play five rounds, compare each pair of rolls, and see who earns the most points.

## How to play

1. Open the game in a browser.
2. Select **ROLL DICE** to roll once for yourself and once for the computer.
3. The higher roll earns one point. Equal rolls are a draw and earn no points.
4. Play all five rounds. The player with the most points wins; if the scores are equal, the game ends in a draw.
5. Select **RESTART** or **Play again** to start a new game.

The current round, dice results, scores, and round-by-round history are shown on the game page. A result dialog appears after the fifth round.

## Run locally

No installation or build step is required. Open `index.html` directly in a modern web browser. Keep `index.html`, `index.js`, `style.css`, and `dice.jpg` together in the same folder.

The stylesheet loads the Space Grotesk font from Google Fonts, so that font requires an internet connection; the game itself runs locally.

## Project files

- `index.html` — game layout, controls, score display, history, and end-of-game dialog.
- `index.js` — dice rolls, round and match scoring, history updates, and restart behavior.
- `style.css` — responsive layout and game styling.
- `dice.jpg` — background image used by the page.