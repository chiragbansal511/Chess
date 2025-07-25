# Chess Game

## Project Overview

A comprehensive two-player chess implementation built with React, featuring complete rule enforcement for all six chess piece types. The application manages game logic entirely on the client side using an 8x8 board represented as a 2D array. Each piece type follows authentic movement rules including special moves like pawn double-step, castling, and en passant. The system tracks player turns, validates moves, and maintains accurate board state throughout gameplay.

This project demonstrates advanced React state management, complex algorithmic logic for chess rules, and sophisticated game state validation systems.

## Project Structure

```
chess/
├── src/
│   ├── components/
│   │   ├── App.js             # Main Board and Move calculator and validator
│   │   └── boxcomponent.js    #  Each box component
│   │   └── App.css            # Board and Box stylesheet
├── public/
│   └── assets/
│       └── pieces/            # Chess piece images
└── package.json               # Dependencies and scripts
```

## Technical Details

**Technology Stack:**
- **Frontend**: React 18, JavaScript ES6+, CSS3
- **State Management**: React useState with complex state objects
- **Architecture**: Component-based with modular game logic

**Core Features:**
- 8x8 board represented as 2D array with piece positioning
- Complete movement validation for all six piece types
- Turn-based gameplay with player alternation (White/Black)
- Special moves: pawn double-step, castling, en passant
- Move history tracking and board state management
- Check/checkmate detection algorithms

## Data Flow Model

<img width="1169" height="690" alt="image" src="https://github.com/user-attachments/assets/1f3609a5-72fe-4690-82e8-4f59cd14a52c" />

## User Interface

<img width="1853" height="901" alt="image" src="https://github.com/user-attachments/assets/b08977be-afa2-426d-b841-516f74287d03" />

## How to Use and Play

### Installation
```bash
git clone https://github.com/chiragbansal511/Chess.git
cd Chess
npm install
npm start
```
Access at `http://localhost:3000`

### Gameplay
1. White player moves first in standard chess setup
2. Click piece to select, click destination square to move
3. All traditional chess rules enforced (castling, en passant, promotion)
4. Game detects check, checkmate, and stalemate conditions
5. Move history tracked with standard chess notation

### Controls & Features
- **Controls**: Click-to-select pieces, click destination to move, new game button
- **Features**: Complete rule enforcement, special moves, check/mate detection, move history, piece promotion
