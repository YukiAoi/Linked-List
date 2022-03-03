let singlyLinkedList = {
  head:{
    next:null,
    node:'head'
  }
}

// 循环查询
// 判断currNode的下一个节点不为head是避免没有找到后继续重复查询然后死循环
function findNode(item) {
  let currNode = singlyLinkedList.head
  while (currNode.node !== item && currNode.next.node !== 'head') {
    currNode = currNode.next
  }
  return currNode
}

// 新增节点
function insertNode(newNode,prev) {
  let currNode = findNode(prev)
  const node = {next:currNode.next,node:newNode}
  currNode.next = node
}

// 循环查询上一个节点
function findPrev(item) {
  let currNode = singlyLinkedList.head
  while (currNode.next.node !== 'head' && currNode.next.node !== item) {
    currNode = currNode.next
  }
  return currNode
}

// 删除节点
function deleteNode(item) {
  let prevNode = findPrev(item)
  if (prevNode.next !== null && prevNode.next.node !== 'head') {
    prevNode.next = prevNode.next.next
  }
}

// 打印节点
function displayLinkedList() {
  let currNode = singlyLinkedList.head
  while (currNode.next !== null && currNode.next.node !== 'head') {
    console.log(currNode.next.node)
    currNode = currNode.next
  }
}

// 慎用，死循环
function displayLinkedListCircular() {
  let currNode = singlyLinkedList.head
  while (currNode.next !== null) {
    if (currNode.next.node !== 'head') {
      console.log(currNode.next.node)
    }
    currNode = currNode.next
  }
}

insertNode('Earth','head')
insertNode('Asia','Earth')
insertNode('China','Asia')
insertNode('Sichuan','China')
insertNode('Chengdu','Sichuan')
displayLinkedList()
console.log('-------------------------------')
deleteNode('Asia')
displayLinkedList()
console.log('-------------------------------')
displayLinkedListCircular()