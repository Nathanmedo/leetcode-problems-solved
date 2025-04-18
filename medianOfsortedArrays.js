function medianOfSortedArrays(nums1, nums2){
    //create the total array by merging nums1 and nums2
    const totalArray = [ ...nums1, ...nums2]
    //sort the total array
    const sortedArray = totalArray.sort((a, b)=> a - b)

    //check if the entire array is even 
    if(sortedArray.length % 2 === 0){
        //get the middle index
        const half = sortedArray.length / 2;
        const median = sortedArray[half - 1] + sortedArray[half] / 2
        return median
    }else{
     //if the length is odd
      const index = Math.floor(sortedArray.length / 2);
      const median = sortedArray[index];
      return median   
    }
    return null
}