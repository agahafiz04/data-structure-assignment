import { Tree } from "./binary-tree.js";

const binaryTree = new Tree();

let randomArray = new Array(100);
randomArray = randomArray.fill(0).map(() => Math.floor(Math.random() * 100));

// const newArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 7, 7, 9, 67, 6345, 324];
binaryTree.buildTree(randomArray);
console.log(binaryTree.isBalanced());
console.log(binaryTree.postOrderTraversal());
console.log(binaryTree.inOrderTraversal());
console.log(binaryTree.preOrderTraversal());
binaryTree.insert(12);
binaryTree.insert(13);
binaryTree.insert(20);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(6);
binaryTree.insert(7);
console.log(binaryTree.isBalanced());
binaryTree.rebalancedTree();
console.log(binaryTree.isBalanced());
console.log(binaryTree.postOrderTraversal());
console.log(binaryTree.inOrderTraversal());
console.log(binaryTree.preOrderTraversal());
