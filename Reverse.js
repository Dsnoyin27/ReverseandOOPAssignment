function reverseString(str) {
	// This if statement tests for an empty string
  if (str.length === 0){
    return null;
    
  }
  //this if statement tests for palindromes using the regExp
if(str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')){
  return true;
 }
// this code reverses a string
  var splits = str.split("");
  var reverse= splits.reverse("");
  var joinString= reverse.join("");
  return joinString;
}

reverseString("car");