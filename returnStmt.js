// focus on return a value
function multiplyTwoNumbers(a,b) {
	var result = a * b;
} 
// Output: undefined

var theProductOf2and10 = multiplyTwoNumbers(2,10);
theProductOf2and10; // Output: undefined

// this is the reason why we need to have return at the end

function multiplyTwoNumbers(a,b) {
	var result = a * b;
  // return stmt asking the function to give us back something
  return result;
} 

var theProductOf2and10 = multiplyTwoNumbers(2,10);
theProductOf2and10; // Output: 20


