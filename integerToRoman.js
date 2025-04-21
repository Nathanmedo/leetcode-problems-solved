

function intToRoman(num){

    //constraint is 1-3999
    //create an array of a symbol-value pair
    //putting into consideration the substraction rule and addition rule
    //the substraction rule applies for integers that start with a 4 or a 9
    //example 90 = 100 - 10, 10 = X, 100 = C, 90 = XC
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    
    let result = '';

    for([symbol, value] of romanSymbols){
        //if the number is greater than or equal to the current value being iterated
        while(num >= value){
            //add the symbol to the result
            result += symbol;
            //substract the value of the symbol from the total number
            num -= value
        }
    }

    return result
}

//testing the function 
console.log(intToRoman(1994))