let BinaryTreeNode = require('./BinaryTreeNode')

class WidthTree {
    treeWidth(root) {
        let max = 0
        let height = this.maxDepthRecursive(root)
        for (let i = 0; i <= height; i++) {
            let tmp = this.width(root,i)
            if(tmp >max) max=tmp
        }
        return max;
    }
    width(root, depth) {
        if(!root) 
            return 0
        else
            if(depth==0)
                return 1
            else
                return width(root.left,depth-1) + this.width(root.right,depth-1)
    }
    maxDepthRecursive(root) {
        if (!root) return 0
        let leftDepth = this.maxDepthRecursive(root.left)
        let rightDepth = this.maxDepthRecursive(root.right)

        return (leftDepth > rightDepth) ? leftDepth + 1 : rightDepth + 1
    }
}