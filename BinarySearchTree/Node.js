class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null

    }
    addNode(node) {

        if (node.value > this.value) {
            if (this.right == null) {
                this.right = node
            } else {
                this.right.addNode(node)
            }
        } else if (node.value < this.value) {
            if (this.left == null) {
                this.left = node
            } else {
                this.left.addNode(node)
            }
        }
    }
    visit(){
        if(this.left!=null){
        this.left.visit();}

        console.log(this.value)

        if(this.right!=null){
        this.right.visit();}

    }
    search(val){
        if(val == this.value){
            return this
        }else if(val<this.value){
            return this.left.search(val)
        }else if(val>this.value){
            return this.right.search(val)
        }
        return -1
    }
}


export {
    Node
}