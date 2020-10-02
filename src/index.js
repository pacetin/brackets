module.exports = function check(str, bracketsConfig) {
    let expectedSymbolArray = [];
    const BRACKETS = {
      ')':'(', ']':'[', '}':'{', '2':'1', '4':'3', '6':'5'
    }
    for (let char of str) {        
      if (char === '|' || char === '7' || char === '8') {
        if (char === expectedSymbolArray[expectedSymbolArray.length-1] ) {
          expectedSymbolArray.pop();        
        } 
        else {
          expectedSymbolArray.push(char);
          console.log(expectedSymbolArray);        
        }; 
      }
      else if (char === '(' || char === '{'|| char === '[' || char === '1' || char === '3' || char === '5') {
        expectedSymbolArray.push(char);
        console.log(expectedSymbolArray);
      }
      else if (char === ')' || char === '}'|| char === ']' || char === '2' || char === '4'|| char === '6') {
        if ( BRACKETS[char] === expectedSymbolArray.pop() ) {
          console.log(expectedSymbolArray);              
          continue;
        }
        else {
          return false;
        }
      }
      else {
        console.log(char);
        continue;
      }
    }    
    if (expectedSymbolArray.length !== 0) return false;
    else return true;  
  }
