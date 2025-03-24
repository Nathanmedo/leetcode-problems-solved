function TwoSumProblem(nums, target){
    //create a map to store already checked values in the array and its index
    //sample { 4: 0, 2: 1 } for an array [4, 2]
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        //get the compliment number e.g for a target of 9, the compliment is 9-4 = 5
        const compliment = target - nums[i];

        //check if the compliment exists in the map
        if(map.has(compliment)){
            return [map.get(compliment), i]
        }

        map.set(nums[i], i)
    }
    return [];
}