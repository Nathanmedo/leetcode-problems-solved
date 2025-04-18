//link to find problem: https://leetcode.com/problems/zigzag-conversion/description/

function zigzagConversion(s, numRows){
    //check if numRows is 1 or greater than the length of the string
    //if so, return the string as it is
    if(numRows === 1 || numRows >= s.length){
        return s;
    }

    //create an array representing the rows
    //if numRows is 3, the array will have 3 empty strings
    //["", "", ""]
    //if numRows is 4, the array will have 4 empty strings
    //["", "", "", ""]
    const rows = new Array(numRows).fill("")
    let currentRow = 0; //starting from the first index of the array
    let direction = 1; //1 means going down, -1 means going up
    //loop through the string and add it to the current row
    for(char of s){
        rows[currentRow] += char;

        if(currentRow === 0){
            direction = 1 //going down
        }
        //check if the currentRow is on the last index of the array
        if(currentRow === numRows - 1){
            direction = -1 //going up
        }
        //update the currentRow by adding the direction to it
        currentRow += direction
    }
    return rows.join("")
}
console.log(zigzagConversion("PAYPALISHIRING", 3)) // "PAHNAPLSIIGYIR";
console.log(zigzagConversion("PAYPALISHIRING", 4)) // "PINALSIGYAHRPI";


