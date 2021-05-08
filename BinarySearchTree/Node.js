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
            console.log("fk you",this)
            return this
        }else if(val<this.value){
            if(this.left==null){return -1}
            return this.left.search(val)
        }else if(val>this.value){
            if(this.right==null){return -1}
            return this.right.search(val)
        }
        
    }
    /* 
    delete(val){
       const deletedNode = this.search(val)
       console.log("the one",deletedNode)
       if(deletedNode==-1){
        console.log("element dosent exest")}
        else{
            if(deletedNode.left!=null){
                deletedNode.value = deletedNode._rightChaining()
            }else if(deletedNode.right!=null){
                deletedNode.value = deletedNode._leftChaining()
            }else{
                deletedNode.value = null
            }
        }
    }
    _rightChaining(){
        if(this.right==null){
            const newValue = this.value
           
             // what if it has left you need to left he left to the pleave
           if(this.left == nul){
            this.value = null
           }else{

           }
            return newValue
        }else{
            this.right._rightChaining()
        }
    }
    _leftChaining(){
        if(this.left==null){
            const newValue = this.value
            this.value = null
            return newValue
        }else{
            this.left._leftChaining()
        }
    }*/
    removeNode(root,value) {
        
        // base case, if the tree is empty 
        let  current = root.search(value)
        console.log(current)
       if(current === null) return current
        
        // when value is the same as current's value, this is the node to be deleted
        
     
             
            // for case 1 and 2, node without child or with one child
            
            if (current.left === null && current.right === null){
                
                
                    return null
                
                }else if(current.left === null){
                
                    return current.right 
             
                }else if(current.right === null){
                
                    return current.left
                
                }else{
                    
                    /// node with two children, get the inorder successor, 
                    //smallest in the right subtree
                    
                    let tempNode = this.kthSmallestNode(current.right)
                        current.value = tempNode.value
                    
                    /// delete the inorder successor
                    
                        current.right = this.removeNode(current.right, tempNode.value)
                    return current
            }

        // recur down the tree
            
        
    }
    
     /// helper function to find the smallest node
    
    kthSmallestNode(node) {
        while(!node.left === null)
            node = node.left

        return node
    }
}


export {
    Node
}