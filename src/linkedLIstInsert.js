// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function insertValueIntoSortedLinkedList(l, value) {
    // console.log(l.value) # in the case of empty list this will throw an erro
    console.log(value)
    // make new node
    let new_node = new ListNode(value)

    // if linked list is empty
    if (l == null) {
        // make l the new starting node
        l = new_node
        return l
    }
    
    // other case you will want to watch out for:
    
    //  if the value is less than the first value of the linked list
        // then you probably want to create a temp var to hold l 
        // set your new_node's next pointer equal to this temp var
        // l is like your head pointer you have to update this to equal the new node 

        
    // now you need to traverse through the list and insert the new node It really helps to draw this out!!
}
