var eraseOverlapIntervals = function(intervals) {
    //0. Instanciate count = 0
    //1. Sort the input by the start interval
    //2. Loop through the array 
    //3. Compare current's ending with the next interval's start 
        //if current's ending is greater than nexts' start, they are overlapping
            //increment count 
            //remove the element overlapping
    //4. return count 
    
    let count = 0; 
    intervals = intervals.sort((first, second) => first[0] - second[0])
    console.log(intervals)
        for(let i = 0; i < intervals.length; i++){
            let current = intervals[i]; 
            let next = intervals[i+1]; 
            if(next){
            if(current[1] > next[0]){
                count ++; 
                intervals.splice(i+1, 1); 
                
                i --;
    
            }
        }
        }

    return count;
    
};
