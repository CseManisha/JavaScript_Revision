// Given an integer x, return true if x is a palindrome, 
// and false otherwise.

 function isPalindrome(x){


    if(x<0){
        return false;
    }

    let originalNumber=x;
    let reversedNumber=0;

    while(x>0){
        let digit=x%10;
        reversedNumber=reversedNumber*10+digit;
        x=Math.floor(x/10);
    }
    return originalNumber === reversedNumber;
 }
 console.log(isPalindrome(121))