
//l1 and l2 are listnodes
function addTwoNumbers(l1, l2){
    //create linked list to store result
    let dummy = new ListNode();
    //create a runner to traverse the linked lists
    let current =  dummy;
    //carry, the value to carry over after addition if there is any need to for example 5+7 = 2 carry 1
    let carry = 0;

    //if either l1, l2, or carry are true, meaning they arent falsy values
    while( l1 || l2 || carry){
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        //the carry is the Math.floor of the sum/10
        //example: if the sum = 12 carry = Math.floor(12/10), which is equal to 1
        //example: if the sum = 15 carry = Math.floor(15/10), which is equal to 1
        carry = Math.floor(sum/10);
        //the next Listnode of the linked list is sum  % 10
        //following up thaat previous example 12 % 10 = 2, which follows up that 2 carry 1
        current.next = new ListNode(sum % 10);
        //move the pointer to the current node that was just created
        current = current.next

        if(l1) l1.next; //move to the next node of l1 example if l1(current) = 5, l1.next = 7 and if there is no value l1.next = null
        if(l2) l2.next; //move to the next node of l2, likewise for l2

    }
    //dummy.next was used because a linked list always starts from zero, which is not meant to be included in the solution
    return dummy.next;
}