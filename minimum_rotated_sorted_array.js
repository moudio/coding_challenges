// The problem can be found on https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solution/

//brute force approach (0(n) solution)

var findMin = function(nums) {
    //asssume that every element is greater than the last 
    //if that logic doesn't apply, we found the pivot; 
    // return the pivot 
    let min = Infinity
    for(let i = 0 ; i < nums.length; i++){
        if (nums[i] < min){ 
            min = nums[i]
        }
        
        
    }
    return min; 
};
