import {Node} from'./Node.js'

class Tree{
    constructor(){
        this.root=null
    }
    addValue(val){
        const node = new Node(val);
        if(this.root == null){
            this.root=node;
        }else{
          return  this.root.addNode(node)
        }
    }
    traverse(){
        this.root.visit()
    }
    search(val){
        return this.root.search(val)
    }
}



let tree = new Tree()

tree.addValue(5)
tree.addValue(4)
tree.addValue(6)
tree.addValue(7)
tree.addValue(3)

tree.traverse()
console.log(tree.search(3))