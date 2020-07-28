//can be found on https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
    //use two pointers 
    // when the first pointer moves by one step, the second moves two steps
    let count = 0;
    let index = 0;
    let firstPointer = head; 
    let secondPointer = head;
    
    if(!head || !head.next){
        return false;
    }
    
    while(count < 2){

        secondPointer = secondPointer.next;
       
        count ++;
    }
    
    while(secondPointer && secondPointer.next){
        firstPointer = firstPointer.next;
    
      if(firstPointer === secondPointer) {
          return true;
      }
        
        secondPointer = secondPointer.next.next; 
        index ++;
    }
    
    return false;
};
