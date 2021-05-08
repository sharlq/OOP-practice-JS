let tree
tree = new Tree();


function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
Node.prototype.addNode = function(n){
    
    if (n.value>this.value){
       
        if(this.right==null){
            this.right = n  
        }else{
            this.right.addNode(n)
        }
    }else if(this.value>n.value){
        
            if (this.left==null){
                this.left=n
            }else{
                this.left.addNode(n)
            }
        
    }
}

Node.prototype.visit = function() {
    if(this.left!=null){
    this.left.visit();}
    console.log(this.value)
    if(this.right!=null){
    this.right.visit();}
}
Node.prototype.search= function(val) {
    if(val==this.value){
        return `found ${this}`
    }else if(val<this.value){
        return this.left.search(val)
    }else if(val>this.value){
        return this.right.search(val)
    }else{
        return "not found"
    }
}

// i just need a referance to the root if i can access the root i can access any thing
function Tree() {
  this.root = null;
}

Tree.prototype.addvalue = function(value) {
    let n = new Node(value)
  if (this.root == null) {
    this.root = n;
  } else{
      this.root.addNode(n)
  }
};


Tree.prototype.traverse = function() {
    this.root.visit()
}

Tree.prototype.search= function(val){
    let really = this.root.search(val)
    console.log(really)
}

Tree.prototype.delete = function(val){
    this.root.search
}

////////////////////////////////////////////////////////////////
tree.addvalue(4)
tree.addvalue(2)
tree.addvalue(6)
tree.addvalue(8)
tree.addvalue(3)
//tree.traverse()
tree.search()
console.log(tree);

//note you cant use the arrow function to create class or object