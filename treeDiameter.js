import { BinaryTree } from "./Tree/binaryTree.js";

const diameter = (root) => {
    if(root == null) return 0;
    const diam1 = diameter(root.left);
    const diam2= diameter(root.right);
    const treeHeight = binaryTree.height(root.left) + binaryTree.height(root.right) + 1;

    return Math.max(diam1, diam2, treeHeight);
}

const nodes = [1,2,3,5,7,-1,-1,-1,-1,4,-1,6,-1,8,-1,-1,-1]
const binaryTree = new BinaryTree()
const root = binaryTree.buildBinaryTree(nodes)
const res = diameter(root);
console.log(res);