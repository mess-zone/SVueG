export default class TreeNode<T> {
    v: T;
    children: TreeNode<T>[];
  
    constructor(value: T) {
      this.v = value;
      this.children = [];
    }
  
    addChild(child: TreeNode<T>): void {
      this.children.push(child);
    }
  
    removeChild(node: TreeNode<T>): void {
      this.children = this.children.filter((child) => child !== node);
    }
  
    traverse(): void {
      console.log(this.v);
      this.children.forEach((child) => child.traverse());
    }

  }
  
  // Example usage:
  // const root = new TreeNode<string>('Root');
  
  // const child1 = new TreeNode<string>('Child 1');
  // const child2 = new TreeNode<string>('Child 2');
  
  // const subChild1 = new TreeNode<string>('Subchild 1');
  // const subChild2 = new TreeNode<string>('Subchild 2');
  
  // child1.addChild(subChild1);
  // child1.addChild(subChild2);
  
  // root.addChild(child1);
  // root.addChild(child2);
  
  // console.log('Original tree:');
  // root.traverse();
  
  // // Removing a node
  // root.removeChild(child1);
  
  // console.log('\nTree after removing Child 1:');
  // root.traverse();
  