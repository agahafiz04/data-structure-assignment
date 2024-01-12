class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(arr) {
    const sortArray = arr.sort((a, b) => a - b);
    const findDuplicate = sortArray.filter((item, index) => {
      return sortArray.indexOf(item) !== index;
    });

    if (findDuplicate.length === 0) {
      console.log("Array Already Sorted, Converting To BST...");
    } else {
      console.log("Sorting Array, Converting To BST...");
    }

    for (let i = 0; i < findDuplicate.length; i++) {
      let duplicateIndex = sortArray.indexOf(findDuplicate[i]);
      sortArray.splice(duplicateIndex, 1);
    }

    return this.sortedArrayToBst(sortArray);
  }

  sortedArrayToBst(sortedArray) {
    this.traverse(sortedArray, 0, sortedArray.length - 1);
  }

  traverse(arr, start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.traverse(arr, start, mid - 1);
    node.right = this.traverse(arr, mid + 1, end);
    this.root = node;

    return node;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }

    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (typeof value !== "number") return "please insert a number";
      if (value === currentNode.value) return undefined;

      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  delete(value) {
    let currentNode = this.root;
    let previousNode = null;

    while (currentNode !== null && currentNode.value !== value) {
      previousNode = currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (currentNode === null) {
      console.log(`"${value}" not found in the BST tree`);
      return this.prettyPrint(this.root);
    }

    if (currentNode.left === null || currentNode.right === null) {
      let newCurrentNode;

      if (currentNode.left === null) {
        newCurrentNode = currentNode.right;
      } else {
        newCurrentNode = currentNode.left;
      }

      if (previousNode === null) {
        console.log("Cant delete, its gonna broke");
        return newCurrentNode;
      }

      if (currentNode === previousNode.left) {
        previousNode.left = newCurrentNode;
      } else {
        previousNode.right = newCurrentNode;
      }

      currentNode = null;
    } else {
      let parent = null;
      let tempNode = currentNode.right;

      while (tempNode.left !== null) {
        parent = tempNode;
        tempNode = tempNode.left;
      }

      if (parent !== null) {
        parent.left = tempNode.right;
      } else {
        currentNode.right = tempNode.right;
      }
      currentNode.value = tempNode.value;
      tempNode = null;
    }

    return this.prettyPrint(this.root);
  }

  find(value) {
    if (this.root === null) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (typeof value !== "number") return "please insert a number";

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        console.log("Value Found!");
        return currentNode;
      }
    }

    console.log("Value Not Found");
    return null;
  }

  levelOrder(callback) {
    let queue = [];
    let traverseNode = [];
    let nextNode;

    queue.push(this.root);

    while (queue.length > 0) {
      nextNode = queue.shift();

      if (nextNode.left) {
        queue.push(nextNode.left);
      }

      if (nextNode.right) {
        queue.push(nextNode.right);
      }

      if (!callback) {
        traverseNode.push(nextNode.value);
      } else {
        callback(nextNode.value);
      }
    }

    return callback ? null : traverseNode;
  }

  height(root) {
    if (!root) {
      root = this.root;
    } else {
      root = this.find(root);
    }

    if (this.root === null) {
      return 0;
    }

    let height = 0;
    let queue = [];

    queue.push(root);

    while (queue.length > 0) {
      for (let i = 0; i < queue.length; i++) {
        let tempNode = queue.shift();

        console.log(tempNode);

        if (tempNode.left !== null) {
          queue.push(tempNode.left);
        }
        if (tempNode.right !== null) {
          queue.push(tempNode.right);
        }
      }

      height++;
    }

    this.prettyPrint(root);
    return `Your total height of the root is ${height}`;
  }

  depth(root) {
    if (!root) {
      return `Depth from the root is 0`;
    } else {
      root = this.find(root);
    }

    if (root === null) {
      return 0;
    }

    let currentNode = this.root;
    let depth = -1;

    while (currentNode) {
      depth++;

      if (root.value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (root.value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        this.prettyPrint();
        return `Depth from the root is ${depth}`;
      }
    }

    return null;
  }

  preOrderTraversal(root, callback) {
    if (!root || root === this.root) {
      root = this.root;
    } else {
      root = this.find(root);
    }

    let stack = [];
    let traverseNode = [];
    stack.push(root);

    while (stack.length) {
      const tempNode = stack.pop();

      if (callback) {
        callback(tempNode.value);
      } else {
        traverseNode.push(tempNode.value);
      }

      if (tempNode.right) stack.push(tempNode.right);
      if (tempNode.left) stack.push(tempNode.left);
    }

    if (traverseNode.length !== 0) return traverseNode;
  }

  inOrderTraversal(root, callback) {
    if (!root || root === this.root) {
      root = this.root;
    } else {
      root = this.find(root);
    }

    let stack = [];
    let traverseNode = [];

    while (root || stack.length) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else {
        const tempNode = stack.pop();

        if (callback) {
          callback(tempNode.value);
        } else {
          traverseNode.push(tempNode.value);
        }

        root = tempNode.right;
      }
    }

    if (traverseNode.length !== 0) return traverseNode;
  }

  postOrderTraversal(root, callback) {
    if (!root || root === this.root) {
      root = this.root;
    } else {
      root = this.find(root);
    }

    let stack = [];
    let traverseNode = [];

    while (root || stack.length) {
      if (root) {
        if (root.right) stack.push(root.right);
        stack.push(root);
        root = root.left;
      } else {
        const tempNode = stack.pop();

        if (tempNode.right && tempNode.right === stack[stack.length - 1]) {
          stack.pop();
          stack.push(tempNode);
          root = tempNode.right;
        } else {
          if (callback) {
            callback(tempNode.value);
          } else {
            traverseNode.push(tempNode.value);
          }
        }
      }
    }

    if (traverseNode.length !== 0) return traverseNode;
  }

  isBalanced(root) {
    if (!root) {
      root = this.root;
    } else {
      root = this.find(root);
    }

    let result = this.isBalancedTraverse(root);
    return result[0];
  }

  isBalancedTraverse(root) {
    if (root == null) {
      return [true, 0];
    }

    let leftHeight = this.isBalancedTraverse(root.left);
    let rightHeight = this.isBalancedTraverse(root.right);

    let leftAnswer = leftHeight[0];
    let rightAnswer = rightHeight[0];

    let diff = Math.abs(leftHeight[1] - rightHeight[1]) <= 1;

    let result = [];

    result[1] = Math.max(leftHeight[1], rightHeight[1]) + 1;

    if (leftAnswer && rightAnswer && diff) {
      result[0] = true;
    } else {
      result[0] = false;
    }

    return result;
  }

  rebalancedTree() {
    let rebalancedArray = this.preOrderTraversal();

    if (this.isBalanced()) {
      console.log("Tree is already balanced, no need to rebalance");
      return null;
    }

    this.buildTree(rebalancedArray);

    console.log("Tree successfully rebalanced!");
    this.prettyPrint();
    return;
  }
}
