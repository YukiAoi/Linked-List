let singlyLinkedList = {
  head:{
    next:null,
    node:'head'
  }
}

// 循环查询
// 如果currNode不等于item，就查询currNode的下一个
// 否则就返回
function findNode(item) {
  let currNode = singlyLinkedList.head
  while (currNode.node !== item) {
    currNode = currNode.next
  }
  return currNode
}

// 新增节点
// 先查到要添加的节点的位置prev
// 如果上一个节点的next为null，则上一个节点的next为newNode，newNode的next为null
// 否则，上一个节点的next为newNode，newNode的next为之前上一个节点的next
// 因此，上一个节点的next为newNode，而newNode的next就是上一个节点的next
function insertNode(newNode,prev) {
  let currNode = findNode(prev)
  const node = {next:currNode.next,node:newNode}
  currNode.next = node
}

// 循环查询上一个节点
// 如果currNode的next不为null且currNode的next的node不等于item，就查询currNode的下一个
// 否则就返回
function findPrev(item) {
  let currNode = singlyLinkedList.head
  while (currNode.next !== null && currNode.next.node !== item) {
    currNode = currNode.next
  }
  return currNode
}

// 删除节点
// 先查到要删除的节点的上一个节点
// 如果上一个节点的next不为null，则上一个节点的next为要删除的节点的next(即上一个节点的next的next)
// 否则上一个节点的next为null
// 因此不用考虑上一个节点的next为null的情况
function deleteNode(item) {
  let prevNode = findPrev(item)
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next
  }
}

// 打印节点
// 如果当前节点的next不为null，则一直循环
function displayLinkedList() {
  let currNode = singlyLinkedList.head
  while (currNode.next !== null) {
    console.log(currNode.next.node)
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
insertNode('Asia','Earth')
displayLinkedList()
