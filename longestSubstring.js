function longestSubString(s){
    //set to store unique characters 
    //{'a', 'b', 'c'} in this format
    let set = new Set();
    //store the starting index of the substring
    let left = 0;
    //store the maximum length of the substring
    let maxLength = 0;

    for(let right = 0; right < s.length; right++){
        //if the current character is already in the set
        //the while loop keeps running as long as the condition is true

        while(set.has(s[right])){
            //remove the characterthe left pointer is pointing to
            set.delete(s[left]);
            //increase the left pointer to the next character
            left++
        };

        //add the current character to the set
        set.add(s[right]);

        maxLength = Math.max(maxLength, (right - left) + 1)
    }
    return maxLength;
}