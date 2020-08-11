var maxDepth = function (root) {
  //declare a array called depths,
  //traverse the root's left and right children
  //if the current node is a leaf, store the depth in depths

  //return the max in depths
  if (!root) {
    return 0;
  }

  const depths = [];
  let maxLeft = 1 + maxDepth(root.left);
  let maxRight = 1 + maxDepth(root.right);
  return Math.max(maxLeft, maxRight);
};
