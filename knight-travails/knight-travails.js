function createBoard(position, path) {
  if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7)
    return null;

  return { position, path };
}

const offsets = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

function knightMoves([x1, y1], [x2, y2]) {
  let queue = [createBoard([x1, y1], [[x1, y1]])];
  let current = queue.shift();

  while (current.position[0] !== x2 || current.position[1] !== y2) {
    let start = current.position[0];
    let end = current.position[1];

    let moves = [
      [start + 2, end - 1],
      [start + 2, end + 1],
      [start - 2, end - 1],
      [start - 2, end + 1],
      [start + 1, end - 2],
      [start + 1, end + 2],
      [start - 1, end - 2],
      [start - 1, end + 2],
    ];

    moves.forEach((direction) => {
      let board = createBoard(direction, current.path.concat([direction]));
      if (board) {
        queue.push(board);
      }
    });
    current = queue.shift();
  }

  logMessage(current);
}

function logMessage(currentPath) {
  console.log(
    `Your total move are ${
      currentPath.path.length - 1
    } times!, Here's the path:`
  );
  currentPath.path.forEach((position) => {
    console.log(`[${position[0]}, ${position[1]}]`);
  });
}

knightMoves([3, 3], [4, 3]);
