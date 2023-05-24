let num = parseInt(prompt("write a number"));	// declared a variable that takes input and converts it into an integer
function factorial(num) {			// created a function that uses the variable above
	if (num > 0) {				// created a condition - variable is more than 0
		let el = num			// declared a new variable for the elements of the list and initialised it to the input variable
		let list = [el];		// declared an array with one element
		let fact = 1;			// declared and initialised a variable fact to be used in a loop later
		while (el>1) {			// created a while loop to push more elements to the list
			el -=1;			// the loop subtracts 1 from the element and adds it to the array
			list.push(el);
			
		}
		for (i=0; i<list.length; i++) { // created a loop to multiply all the elements of the array
			fact*=list[i]
		}
		console.log(`${num}!=${fact}`)  // output the string with the original variable and the factorial of this variable
	}
	
	else if (num == 0) {			// set another condition - variable is 0
		console.log("0!=1")		// output the string with the variable 0 and its factorial
	} 
	else {					// set another condition - variable is negative
		console.log("a negative number was entered") // output a string if the variable is a negative number
	}
}							
factorial(num)		  			// call the function


