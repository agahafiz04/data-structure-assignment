function positionCheck(position, destination) {
  let [x, y] = position;
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7) return { position, destination };
  return false;
}

const moveList = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

function knightTraversal([x1, y1], [x2, y2]) {
  let queue = [positionCheck([x1, y1], [[x1, y1]])];
  let current = queue.shift();
}

// function breadthFirstSearch(root) {
//   const result = [];
//   const queue = [root];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current === null) continue;
//     result.push(current.value);
//     for (const child of current.children) {
//       queue.push(child);
//     }
//   }
//   return result;
// }
