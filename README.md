# Rock Paper Scissors (Web Game)

A simple **Rock-Paper-Scissors** game built with **HTML, CSS, and JavaScript**.  
The game lets you play against the computer, keeps track of your score using `localStorage`, and displays results with emojis.

---

## How it works

- Click on **Rock**, **Paper**, or **Scissors**.
- The computer randomly chooses its move.
- The winner is decided by classic rules:
  - Rock beats Scissors
  - Paper beats Rock
  - Scissors beats Paper
- Your **wins**, **losses**, and **ties** are tracked and stored in your browser’s `localStorage` (so they persist across reloads).
- You can reset the score with the **Reset Score** button.

---

## Project Structure
rock-paper-scissors/
├─ rock-paper-scissors.html # main HTML page
├─ rock-paper-scissors.css # styling
├─ rock-paper-scissors.js # game logic
└─ icons/ # emoji images
├─ rock-emoji.png
├─ paper-emoji.png
└─ scissors-emoji.png

rock-paper-scissors/
├─ 10-rock-paper-scissors.html # main HTML page
├─ 10-rock-paper-scissors.css # styling
├─ 10-rock-paper-scissors.js # game logic
└─ icons/ # emoji images
├─ rock-emoji.png
├─ paper-emoji.png

---

## Demo

When you click a move:
- The result (win/lose/tie) is shown.
- The chosen icons (you vs computer) are displayed.
- The updated stats are shown below.

Example:
- You win.
- You 🪨 📄 Computer
- Wins: 1, Losses: 0, Ties: 0

---


---

## Getting Started

1. Clone or download this repo.
2. Open `rock-paper-scissors.html` in your browser.
3. Play!

No server or build steps required — it runs entirely in the browser.

---

## Technologies Used

- **HTML5** for structure
- **CSS3** for styling
- **Vanilla JavaScript** for logic
- **localStorage** for saving score
- Emoji icons for moves (PNG images)

---

## Author

Developed by **Nicolas Constantinou** — 2025

