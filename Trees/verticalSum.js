let BinaryTreeNode = require('./BinaryTreeNode')

class VerticalSum {

    vSumRecursive(hash, root, counter) {
        if (root.left != null) {
            this.vSum(hash, root.left, counter-1)
        }
        if (root.right != null) {
            this.vSum(hash, root.right, counter+1)
        }
        if (typeof hash.get(counter) != "undefined") {
            d = hash.get(counter)
        }
        hash.set(counter, root.data + d)
    }

    verticalSumRecursive(treeRoot) {
        let hashMap = new Map();
        this.vSumRecursive(hashMap, treeRoot, 0)
        for (var [key, value] of hashMap) {
            console.log(key + ' Sum :  ' + value);
        }
    }

}