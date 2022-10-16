const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    var newNode = new Node(data);

    if(this.rootNode === null){
      this.rootNode = newNode;
      return this;
    }

    let current = this.rootNode;
    while(current){
      if(data === current.data) return false;
      if(data < current.data){
          if(current.left === null){
              current.left = newNode;
              return this;
          }
          current = current.left;
      } else {
          if(current.right === null){
              current.right = newNode;
              return this;
          }
          current = current.right
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return this.find(data) ? true : false
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    if(!this.rootNode) return null;

    let current = this.rootNode
    let founnd = false

    while (current && !founnd){
      if(data < current.data){
        current = current.left
        continue
      }
      if(data > current.data){
        current = current.right
        continue
      }
      founnd = current

    }
    return !founnd ? null : founnd
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data, node = this.rootNode) {
    if (!node) return null;

    if (data > node.data) {
      node.right = this.remove(data, node.right);
      return node;
    }
    if (data < node.data) {
      node.left = this.remove(data, node.left);
      return node;
    }

    if (!node.left && !node.right) {
      return null
    }

    if (!node.left) {
      node = node.right;
      return node;
    }
    if (!node.right) {
      node = node.left;
      return node;
    }

    let minr = node.right;
    while (minr.left) {
      minr = minr.left;
    }

    node.data = minr.data;
    node.right = this.remove(minr.data, node.right);

    return node;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let current = this.rootNode;
    while(current.left){
      current = current.left
    }
    return current.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    let current = this.rootNode;
    while(current.right){
      current = current.right
    }
    return current.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};