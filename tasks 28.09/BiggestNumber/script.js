
let nums = [-5,-2,-6,0,-1,-100,-20];

let largest = nums[0];

for (let index = 0; index < nums.length; index++) {
    
    
    if (nums[index] > largest) {
        largest = nums[index];
    }
}


alert("The largest number is: " + largest);
