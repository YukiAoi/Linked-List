let singlyLinkedList = {
  head:{
    next:null,
    node:'head',
    prev:null
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
// 同时，newNode的prev为上一个节点
// 否则，上一个节点的next为newNode，newNode的next为之前上一个节点的next
// 同时，newNode的prev为上一个节点，之前的上一个节点的next的prev为newNode
// 因此，上一个节点的next为newNode，而newNode的next就是上一个节点的next，
// 如果之前的上一个节点的next不为null，则之前的上一个节点的next的prev为newNode
function insertNode(newNode,prev) {
  let currNode = findNode(prev)
  const node = {
    next:currNode.next,
    node:newNode,
    prev:currNode
  }
  if (currNode.next !== null) {
    currNode.next.prev = node
  }
  currNode.next = node
}

// 删除节点
// 直接查找要删除的节点
// 如果currNode的prev不为null
// 则currNode的prev的next为currNode的next
// 如果currNode的next不为null
// 则currNode的next的prev为currNode的prev
// 同时currNode的next和prev都为null
function deleteNode(item) {
  let currNode = findNode(item)
  if (currNode.prev !== null) {
    currNode.prev.next = currNode.next
  }
  if (currNode.next !== null) {
    currNode.next.prev = currNode.prev
  }
  currNode.prev = null
  currNode.next = null
}

// 打印节点
function displayLinkedList() {
  let currNode = singlyLinkedList.head
  while (currNode.next !== null) {
    console.log(currNode.next.node)
    currNode = currNode.next
  }
}

// 查询最后一个节点
function findLast() {
  let currNode = singlyLinkedList.head
  while (currNode.next !== null) {
    currNode = currNode.next
  }
  return currNode
}

//反向打印节点
function dispReverse(){
  let currNode = findLast()
  while (currNode.prev !== null) {
    console.log(currNode.node)
    currNode = currNode.prev
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
dispReverse()
console.log('-------------------------------')
insertNode('Asia','Earth')
displayLinkedList()
