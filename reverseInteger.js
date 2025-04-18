//link to find problem: https://leetcode.com/problems/reverse-integer/description/

function reverseInteger(x){
    //constraints
    //-231 <= x <= 231 - 1
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);

    //gget the sign of the number
    const sign = Math.sign(x);
    //reverse the digits of the number
    const reversedDigits = parseInt(String(Math.abs(x)).split("").reverse().join(""));
    const reversedNumber = sign * reversedDigits

    if(reversedNumber >= INT_MIN && reversedNumber <= INT_MAX){
        return reversedNumber
    }

    return 0
}