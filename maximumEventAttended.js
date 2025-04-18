//link to find leetcode problem: will update if found 


function maximumEventAttended(events){
    //sort the array of events by the end time in ascending order
    //example [[2, 4], [3, 6], [1, 3]] will be sorted to [[1, 3], [2, 4], [3, 6]] 
    // because 3 < 4 < 6 in ascending order of the end time

    //why a[1] - b[1]?
    //well because each item in the array is formatted as [startTime, endTime][0, 1]
    //and therefore to sort the array based on the condition that the end time is in ascending order
    //the endtime of each property has to be passed
    //these means that to sort the array based on the start time it will be a[0] - b[0]
    const sortedArray = events.sort((a, b)=> a[1] - b[1]);

    //store the amount of events that can be attended
    let attended = 0;
    //store the last end time iterated over
    let lastendTime = -1; //the lastendTime is -1 because the first event is always going to be attended after the array has been sorted

    for([start, end] of sortedArray){
        //check if the start time of the next event is greater than or equal the last end
        if(start >= lastendTime){
            //increase the attended events
            attended++;
            //updated the last end time to the end time of the current event attended
            lastendTime = end
        }
    }
    return attended

}


//test
const events = [[5, 10], [1, 5], [10, 15], [3, 8], [8, 12], [2, 6], [6, 9], [11, 13], [9, 14], [4, 7], [7, 11]];
console.log(maximumEventAttended(events))

//optimising function to show the events that can be attended
function maximumEventAttendedShown(events){
    //sort the array of events by the end time in ascending order
    //example [[2, 4], [3, 6], [1, 3]] will be sorted to [[1, 3], [2, 4], [3, 6]] 
    // because 3 < 4 < 6 in ascending order of the end time

    //why a[1] - b[1]?
    //well because each item in the array is formatted as [startTime, endTime][0, 1]
    //and therefore to sort the array based on the condition that the end time is in ascending order
    //the endtime of each property has to be passed
    //these means that to sort the array based on the start time it will be a[0] - b[0]
    const sortedArray = events.sort((a, b)=> a[1] - b[1]);

    //store the amount of events that can be attended
    let attended = [];
    //store the last end time iterated over in an array
    let lastendTime = -1; //the lastendTime is -1 because the first event is always going to be attended after the array has been sorted

    for([start, end] of sortedArray){
        //check if the start time of the next event is greater than or equal the last end
        if(start >= lastendTime){
            //increase the attended events
            attended.push([start, end]);
            //updated the last end time to the end time of the current event attended
            lastendTime = end
        }
    }
    return attended

}

console.log(maximumEventAttendedShown(events))