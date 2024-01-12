// Currently still on maintenance

function insert(value) {
  // If the tree is empty, return a new node
  if (this.root == null) {
    this.root = new Node(value);
    return this.root;
  }

  // Otherwise, recur down the tree
  if (value < this.root.value) this.root.left = insert(this.root.left, value);
  else if (value > this.root.value)
    this.root.right = insert(this.root.right, value);

  // Return the (unchanged) node pointer
  return this.root;
}

function deleteNode(root) {
  if (root === null) {
    return root;
  }

  if (root.key > k) {
    root.left = deleteNode(root.left, k);
    return root;
  } else if (root.key < k) {
    root.right = deleteNode(root.right, k);
    return root;
  }

  if (root.left === null) {
    let temp = root.right;
    delete root;
    return temp;
  } else if (root.right === null) {
    let temp = root.left;
    delete root;
    return temp;
  } else {
    let succParent = root;

    let succ = root.right;
    while (succ.left !== null) {
      succParent = succ;
      succ = succ.left;
    }

    if (succParent !== root) {
      succParent.left = succ.right;
    } else {
      succParent.right = succ.right;
    }

    root.key = succ.key;

    delete succ;
    return root;
  }
}

function find(root) {
  if (root === null || root.key === key) {
    return root;
  }

  if (root.key < key) {
    return search(root.right, key);
  }

  return search(root.left, key);
}

function levelOrder() {
  let h = height(root);
  let i;
  for (i = 1; i <= h; i++) printCurrentLevel(root, i);
}

function findDepth(root, x) {
  // Base case
  if (root == null) return -1;

  // Initialize distance as -1
  var dist = -1;

  // Check if x is current node=
  if (
    root.data == x ||
    // Otherwise, check if x is
    // present in the left subtree
    (dist = findDepth(root.left, x)) >= 0 ||
    // Otherwise, check if x is
    // present in the right subtree
    (dist = findDepth(root.right, x)) >= 0
  )
    // Return depth of the node
    return dist + 1;

  return dist;
}

// Helper function to find the height
// of a given node in the binary tree
function findHeightUtil(root, x) {
  // Base Case
  if (root == null) {
    return -1;
  }

  // Store the maximum height of
  // the left and right subtree
  var leftHeight = findHeightUtil(root.left, x);

  var rightHeight = findHeightUtil(root.right, x);

  // Update height of the current node
  var ans = Math.max(leftHeight, rightHeight) + 1;

  // If current node is the required node
  if (root.data == x) height = ans;

  return ans;
}

// Function to find the height of
// a given node in a Binary Tree
function findHeight(root, x) {
  // Stores height of the Tree
  findHeightUtil(root, x);

  // Return the height
  return height;
}

function preOrderTraversal(root) {
  callback(root.value);
  this.inOrderTraversal(root.left, callback);
  this.inOrderTraversal(root.right, callback);
}

function inOrderTraversal(root) {
  this.inOrderTraversal(root.left, callback);
  callback(root.value);
  this.inOrderTraversal(root.right, callback);
}

function postOrderTraversal(root) {
  this.inOrderTraversal(root.left, callback);
  this.inOrderTraversal(root.right, callback);
  callback(root.value);
}
