//link to find leetcode problem

function longestPalindromicSubstring(s){
    //constraint of a string with length greater than 1000
    if(s.length > 1000) return "";
    if(!s || s.length < 1) return "";
    
    function expandFromStartingPoint(left, right){
        //using a flag for good practice
        let condition = true;
        while(condition){
            //check the condition if its true
            if(left >= 0 && right < s.length && s[left] === s[right]){
                left--;
                right++
            }else{
                condition = false
            }
        }
        return s.slice(left + 1, right);
    }

    //for loop to run the function for each letter in the string which acts as a starting point
    for(let i = 0; i < s.length; i++){
        //for odd palidrome, the starting point is the same character
        const oddPalindrome = expandFromStartingPoint(i, i);
        //for even palindrome, the starting point of the right pointer is next to the starting point
        //of the left pointer
        const evenPalindrome = expandFromStartingPoint(i, i+1);

        if(oddPalindrome.length > longest.length){
            longest = oddPalindrome;
        }
        if(evenPalindrome.length > longest.length){
            longest = evenPalindrome
        }
    }

    return longest;
}