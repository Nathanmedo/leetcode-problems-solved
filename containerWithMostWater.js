
function containerWithMostWater(heights){
    let maximumWater = 0;
    let start = 0;
    let end = heights.length - 1; //get the index of the last element

    //example: [1,8,6,2,5,4,8,3,7]
    //imagine a graph with this numbers as their height and their horizontal distance as the indexes
    //the goal is to find the pair that forms the maximum volume
    //the start pointer starts from an index 0 and the end pointer starts from the index 8
    //they both move inwardly till they meet to find the maximum area that can container the water
    
    //while the start pointer is still less than the end pointer
    while(start < end){
        //get the minimum height, because the water cannot go over the shorter end
        const minimumHeight = Math.min(heights[start], heights[end])
        //get the horizontal distance
        const xDistance = end - start;   //for example 8 - 0 for the first instance
        const area = minimumHeight * xDistance;

        //get the maximum area between the previous and the new
        maximumWater = Math.max(maximumWater, area)

        //if the start point height is less than the end point height
        //the start pointer should move inward
        //and if not the end pointer moves inward
        //the point is to increase the probabilty of find a better pair that will contain a larger amount of water

        if(heights[start] < heights[end]){
            start++;
        }else{
            end--;
        }
    }

    return maximumWater
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))