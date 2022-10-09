function Board() {
  const gameboard = Array(8)
    .fill()
    .map(() =>
      Array(8)
        .fill()
        .map(() => null)
    );
  gameboard.reverse();

  function getGameBoard(coords) {
    return coords ? gameboard[coords[0]][coords[1]] : gameboard;
  }

  function getPossibleKnightMoves(start) {
    const row = start[1];
    const col = start[0];
    if (row > 7 || col > 7 || row < 0 || col < 0) return null;
    const possibleMoves = [
      [col + 2, row - 1],
      [col + 2, row + 1],
      [col + 1, row - 2],
      [col + 1, row + 2],
      [col - 1, row + 2],
      [col - 1, row - 2],
      [col - 2, row - 1],
      [col - 2, row + 1],
    ];
    // Filter moves that are off the board
    return possibleMoves.filter(
      (move) => Math.min(...move) >= 0 && Math.max(...move) < 8
    );
  }
  return { getGameBoard, getPossibleKnightMoves };
}
function shortestKnightPath(start, end) {
  const board = Board();
  const queue = [{ coords: start, predecessor: null }];
  const path = [];
  while (queue.length) {
    // dequeue first in queue
    const first = queue.shift();
    // check if reached the endpoint. need to stringify to compare arrays
    if (JSON.stringify(first.coords) === JSON.stringify(end)) {
      let temp = first;
      while (temp) {
        path.push(temp.coords);
        temp = temp.predecessor;
      }
      break;
    }
    // enqueue possible moves
    const possibleMoves = board.getPossibleKnightMoves([
      first.coords[0],
      first.coords[1],
    ]);
    possibleMoves.forEach((possibleMove) =>
      queue.push({ coords: possibleMove, predecessor: first })
    );
  }
  return path.reverse();
}

function knightMoves(start, end, fn) {
  if (Math.min(...start, ...end) < 0 || Math.max(...start, ...end) > 7) {
    return null;
  }
  const path = shortestKnightPath(start, end);
  if (typeof fn === "function") fn(path);
  else {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.map((move) => console.log(move));
  }
  return path;
}
export default knightMoves;
