//q6 Write a function to check if a given string is a palindrome. Consider reversing the string and comparing it with the original.
function isPalindrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }