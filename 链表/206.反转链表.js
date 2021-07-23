/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 算法图解：https://www.pianshen.com/article/517476376/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null;
    let next = null;
    while(head) {
        //1.先让next指向下一个节点 "=" 相当于 指向的意思。
        next = head.next;
        //2.head的下一个节点要去指向 前驱节点
        head.next = pre;
        //3.pre要现在要指到head 与head齐头并进
        pre = head;
        //4.head要去操作下一个节点去了，所以head 指向next
        head = next;
        console.log('header:',head)
    }
    return pre;
    
};



var a = 10;
function fun(a) {
    a=20;
}

fun(a);
console.log(a)