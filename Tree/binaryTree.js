class Node {
    left = null;
    right = null;
    data;

    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BinaryTree {
    idx = -1;

    buildBinaryTree(nodes) {
        this.idx++;
        if (nodes[this.idx] == -1) {
            return null;
        }
        let node = new Node(nodes[this.idx])
        node.left = this.buildBinaryTree(nodes)
        node.right = this.buildBinaryTree(nodes)
        return node;

    }

    preOrder(root) {
        if (root == null) return;
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    inOrder(root) {
        if (root == null) return;
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
    }

    postOrder(root) {
        if (root == null) return;
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.data);
    }

    levelOrder(root){
        let queue = []
        queue.push(root)
        while(queue.length != 0){
            let node = queue.shift()
            console.log(node.data);
            if(node.left != null){
                queue.push(node.left)
            }
            if(node.right != null){
                queue.push(node.right)
            }
        }
    }
}

const nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, 7, -1, -1]
const binaryTree = new BinaryTree()
const root = binaryTree.buildBinaryTree(nodes)
console.log("=================== preoder ====================");
binaryTree.preOrder(root)
console.log("=================== inorder ====================");
binaryTree.inOrder(root)
console.log("=================== postorder ====================");
binaryTree.postOrder(root)
console.log("=================== level order ====================");
binaryTree.levelOrder(root)