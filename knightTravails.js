function Game() {
  const gameboard = [];

  for (let i = 0; i < 8; i += 1) {
    const row = [];
    for (let j = 0; j < 8; j += 1) row.push(null);
    gameboard.push(row);
  }

  const getGameBoard = () => gameboard;

  function placePiece(coords, piece) {
    const x = coords[0];
    const y = coords[1];
    if (x >= 8 || y >= 8) return;
    gameboard[x][y] = piece;
  }

  return { getGameBoard, placePiece };
}

function knightMoves(start, end) {
  const game = Game();
  game.placePiece(start, "knight");
}
